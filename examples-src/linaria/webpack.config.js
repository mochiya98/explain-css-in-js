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
              //note:
              // 不必要になったimport消してくれない不具合がある(#293)ので、
              // babelプラグインでimportを除去する
              //↓追加
              plugins: [
                [
                  "filter-imports",
                  {
                    imports: {
                      linaria: ["css"],
                    },
                  },
                ],
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
