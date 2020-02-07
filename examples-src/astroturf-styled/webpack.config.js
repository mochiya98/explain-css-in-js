module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          //↓追加
          "astroturf/loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          //↓追加
          "astroturf/css-loader",
        ],
      },
    ],
  },
};
