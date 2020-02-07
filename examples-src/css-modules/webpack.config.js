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
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          {
            loader: "css-loader",
            options: {
              //↓追加
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
