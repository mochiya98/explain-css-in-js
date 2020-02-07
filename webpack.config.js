const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const babelLoaderConfig = {
  loader: "babel-loader",
  options: {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          targets: {
            esmodules: true,
          },
          useBuiltIns: "usage",
          corejs: 3,
          modules: false,
          loose: true,
        },
      ],
    ],
    plugins: [
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "h",
          pragmaFrag: "Fragment",
        },
      ],
      [
        "babel-plugin-jsx-imports",
        {
          pragma: "{ h } from preact",
          pragmaFrag: "{ Fragment } from preact",
        },
      ],
    ],
  },
};

module.exports = {
  entry: {
    app: `./src/index.js`,
  },
  output: {
    path: path.join(__dirname, "docs"),
    publicPath: "./",
  },
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [babelLoaderConfig],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: ["json-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          babelLoaderConfig,
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "async" }),
    /*new webpack.IgnorePlugin({
      checkResource: (p,d) => !!d.match(/refractor$/)&&p.match(/^\.\/lang/)&&!p.match(/javascript/),
    }),*/
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      refractor$: path.join(__dirname, "./refractor-tiny-loader"),
    },
    extensions: [".js", ".svg"],
  },
  stats: {
    excludeAssets: [/react-syntax-highlighter/],
    excludeModules: [/(?:webpack|\(webpack\))(?:\/buildin|-dev-server)/],
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
  },
  devtool: false,
};
