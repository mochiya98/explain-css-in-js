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
              presets: [
                "@babel/preset-react",
                //↓追加
                [
                  "@emotion/babel-preset-css-prop",
                  {
                    autoLabel: false,
                    sourceMap: false,
                  },
                ],
              ],
              //↓追加
              plugins: [
                [
                  "babel-plugin-emotion",
                  {
                    autoLabel: false,
                    sourceMap: false,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
