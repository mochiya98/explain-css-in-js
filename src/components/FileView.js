import React, { useCallback, useMemo } from "react";

import { About } from "./About";
import { useSearchParams } from "../hooks/useSearchParams";
import { buildResults } from "../build-results-formatted";

import ReactCSSTransitionReplace from "react-css-transition-replace";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prismLight from "../prism-theme/prism-light";
import prismDark from "../prism-theme/prism-dark";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    height: "100%",
    boxSizing: "border-box",
  },
  about: {
    height: "100%",
    overflow: "auto",
  },
  codePaperTransition: {
    height: "100%",
    "&>span": {
      display: "block",
      height: "100%",
    },
    "&>span>.switch-enter": {
      backgroundColor: theme.palette.type === "light" ? "#fff" : "#222",
    },
  },
  codePaper: {
    flex: 1,
    height: "100%",
    minHeight: 0,
    marginTop: `${theme.spacing(1)}px`,
    overflow: "auto",
    backgroundColor: theme.palette.type === "light" ? "#fff" : "#222",
    padding: theme.spacing(1),
    boxSizing: "border-box",
  },
}));

export function FileView(props) {
  const [{ ex, fp, ft }, setSearchParams] = useSearchParams();
  const file = useMemo(() => buildResults[ex].files.find(c => c.id === fp), [
    ex,
    fp,
  ]);
  const onChange = useCallback((event, newValue) => {
    setSearchParams({ ft: newValue });
  }, []);

  const theme = useTheme();
  const paletteType = theme.palette.type;
  const classes = useStyles();
  return (
    <Box {...props}>
      <Box className={classes.root} p={1}>
        {file ? (
          <React.Fragment>
            <Tabs
              value={ft - 0}
              onChange={onChange}
              variant="scrollable"
              scrollButtons="auto"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="webpack処理後" disabled={file.source === ""} />
              <Tab label="ソース" disabled={file.raw === ""} />
            </Tabs>
            <Paper className={classes.codePaper} elevation={3}>
              <ReactCSSTransitionReplace
                overflowHidden={false}
                transitionName="switch"
                transitionEnterTimeout={350}
                transitionLeaveTimeout={350}
                className={classes.codePaperTransition}
              >
                <SyntaxHighlighter
                  key={fp + ft}
                  language={
                    ft - 0 === 1 && file.name.endsWith(".css") ? "css" : "jsx"
                  }
                  style={paletteType === "light" ? prismLight : prismDark}
                >
                  {ft - 0 === 0 ? file.source : file.raw}
                </SyntaxHighlighter>
              </ReactCSSTransitionReplace>
            </Paper>
          </React.Fragment>
        ) : (
          <About className={classes.about} />
        )}
      </Box>
    </Box>
  );
}
