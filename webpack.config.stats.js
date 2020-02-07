const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const merge = require("webpack-merge");

module.exports = merge(require("./webpack.config.js"), {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      generateStatsFile: true,
      openAnalyzer: false,
    }),
  ],
  optimization: {
    concatenateModules: false,
  },
});
