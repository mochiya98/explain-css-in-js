import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    //color: theme.palette.text.primary
  },
  sectionHeader: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export function About(props) {
  const classes = useStyles();
  return (
    <Box {...props}>
      <Box color="text.primary" px="1rem" className={classes.root}>
        <Typography variant="h2" className={classes.sectionHeader}>
          Explain CSS in JS
        </Typography>
        <Typography gutterBottom>
          各種 CSS in JS
          ライブラリがどんな処理を行って出力しているのかを視覚的に理解するためのサンプル集です。
        </Typography>
        <Typography variant="h5" className={classes.sectionHeader}>
          Usage
        </Typography>
        <Typography>
          <ul className="simple-list">
            <li>
              上部メニュー
              <ul className="simple-list">
                <li>各種サンプルを切り替えることができます</li>
              </ul>
            </li>
            <li>
              左メニュー
              <ul className="simple-list">
                <li>webpackで内部的に生成されたファイル一覧です</li>
                <li>選択すると、右にファイル内容が表示されます</li>
              </ul>
            </li>
            <li>
              右ファイルビュー
              <ul className="simple-list">
                <li>ファイル内容が表示されます</li>
                <li>
                  上部でwebpack処理後/ソースを切り替えできます(表示できる場合のみ)
                </li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
}
