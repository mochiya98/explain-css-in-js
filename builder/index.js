/**! (c) Yukimasa Funaoka | @license MIT License */

const webpack = require("webpack");
const colors = require("ansi-colors");
const merge = require("webpack-merge");
const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const crypto = require("crypto");

const projectRoot = path.resolve(__dirname, "..") + path.sep;

function md5hex(str) {
  const md5 = crypto.createHash("md5");
  return md5.update(str, "binary").digest("hex");
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function buildExample(name) {
  console.log(` ${colors.green.bold(name)}`);
  const exampleName = name;
  const exampleRootPath = path.join("examples-src", name) + path.sep;
  const statsForSize = await new Promise((resolve, reject) => {
    let config = merge(require(`../examples-src/${name}/webpack.config.js`), {
      entry: `./examples-src/${name}/src/index.js`,
      output: {
        path: path.join(__dirname, `../examples-dist/${name}`),
        filename: "index.js",
      },
      mode: "production",
      externals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    });
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(colors.red(stats.compilation.errors.join("\n")));
        reject(new Error("webpack build error"));
      }
      if (stats.hasWarnings()) {
        console.error(colors.yellow(stats.compilation.warnings.join("\n")));
      }
      resolve(stats);
    });
  });
  const rawSource = statsForSize.compilation.assets["index.js"].source();
  const stats = await new Promise((resolve, reject) => {
    let config = merge(require(`../examples-src/${name}/webpack.config.js`), {
      entry: `./examples-src/${name}/src/index.js`,
      output: {
        path: path.join(__dirname, `../examples-dist/${name}`),
        filename: "index.js",
      },
      mode: "production",
      optimization: {
        concatenateModules: false,
        minimize: false,
      },
      plugins: [new HtmlWebpackPlugin({ title: `${name} example` })],
    });
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(colors.red(stats.compilation.errors.join("\n")));
        reject(new Error("webpack build error"));
      }
      if (stats.hasWarnings()) {
        console.error(colors.yellow(stats.compilation.warnings.join("\n")));
      }
      resolve(stats);
    });
  });
  let files = stats.compilation.modules
    .filter(
      m => m.issuer === null || !m.issuer.resource.match(/node_modules[\\/]/)
    )
    .map(m => {
      const rawName = m.userRequest
        .split(projectRoot)
        .join("./")
        .replace(/\\/g, "/");
      const source = m.originalSource().source();
      let raw = "";
      if (m.resource && m.resource.indexOf(exampleRootPath) !== -1) {
        try {
          raw = fs.readFileSync(m.resource).toString();
        } catch (e) {
          console.warn(colors.yellow(e.toString()));
        }
      }
      const name = m.resource
        .replace(projectRoot, "")
        .replace(new RegExp(".*" + escapeRegExp(exampleRootPath)), "")
        .replace(/\\/g, "/");
      return {
        type: "dist",
        id: md5hex(exampleName + ":" + rawName),
        name,
        rawName: rawName.replace(/\.+\//, ""),
        source:
          name.match(/node_modules/) && source.length > 4096
            ? `//省略(詳細は実ファイルを確認してください)\nexport { ... };`
            : source,
        raw: raw,
      };
    });
  files.sort((a, b) => a.name.localeCompare(b.name));
  //console.log(stats.compilation.modules.filter(c=>c.resource.endsWith(".css")).map(c=>[c.type,c.issuer&&c.issuer.resource,c.rawRequest]));
  //const statsJson = stats.toJson();
  //const depends = [...new Set(stats.toJson().modules.map(c=>c.name.match(/(?:\.\/)?node_modules\/([^\/]+)/)).filter(c=>c).map(c=>c[1]))];
  //files.push({type:"dist",id:md5hex(exampleName+":"+"dist/index.js"),name:"dist/index.js (bundled)",rawName:"dist/index.js",source:`// ${rawSource.length} bytes\n`+rawSource,raw:""});
  files.push({
    type: "src",
    id: md5hex(exampleName + ":" + "webpack.config.js"),
    name: "webpack.config.js",
    rawName: "webpack.config.js",
    source: "",
    raw: fs
      .readFileSync(
        path.join(__dirname, `../examples-src/${name}/webpack.config.js`)
      )
      .toString(),
  });
  for (let { rawName } of files) {
    console.log(`  - ${colors.cyan.bold(rawName)}`);
  }
  return { /*depends, */ size: rawSource.length, files };
}

(async () => {
  const results = {};
  for (let name of fs.readdirSync("examples-src")) {
    if (fs.statSync(path.join("examples-src", name)).isDirectory()) {
      results[name] = await buildExample(name);
    }
  }
  fs.writeFileSync(
    path.join(__dirname, "../src/build-results.json"),
    JSON.stringify(results)
  );
  fs.writeFileSync(
    path.join(__dirname, "../examples-dist/index.html"),
    fs
      .readFileSync(path.join(__dirname, "./examples-index.html"))
      .toString()
      .replace(/\[\s*exampleNames\s*\]/g, JSON.stringify(Object.keys(results)))
  );
})();
