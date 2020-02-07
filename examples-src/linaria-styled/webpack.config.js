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
                "linaria/babel",
              ],
            },
          },
          //↓追加
          {
            //note:
            // 自動参照のbabelrc系にjsxプラグイン書いてないと
            // linaria-loaderがjsxのparseErrorで落ちます
            // …意図しないバグの匂いがする。
            loader: "linaria/loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
