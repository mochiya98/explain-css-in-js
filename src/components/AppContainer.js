import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { FileList } from "./FileList";
import { FileView } from "./FileView";

const useStyles = makeStyles(theme =>
  createStyles({
    appContainer: {
      backgroundColor: theme.palette.background.default,
      marginTop: theme.spacing(8),
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      display: "flex",
    },
    fileList: {
      width: 360,
      height: `calc(100vh - ${theme.spacing(8)}px)`,
      overflow: "auto",
    },
    fileView: {
      flex: 1,
      maxWidth: `calc(100% - 360px)`,
      height: `calc(100vh - ${theme.spacing(8)}px)`,
    },
  })
);

export function AppContainer() {
  const classes = useStyles();
  return (
    <Box className={classes.appContainer}>
      <FileList className={classes.fileList} />
      <FileView className={classes.fileView} />
    </Box>
  );
}
