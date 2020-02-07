import React, { memo, useCallback, useMemo } from "react";

import { useSearchParams } from "../hooks/useSearchParams";
import { buildResults } from "../build-results-formatted";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { EtcItem, FileItem } from "./FileItem";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100%",
    boxSizing: "border-box",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  listItemIcon: {
    minWidth: theme.spacing(5),
  },
}));

function getType(fileName) {
  if (fileName.match(/^webpack\.config(?:\..+)?\.[jt]s$/)) return "webpack";
  if (fileName.endsWith(".css")) return "js";
  if (fileName.endsWith(".js")) return "js";
  return "md";
}
function genFileItems(files) {
  return files.map(({ id, name }) => (
    <FileItem key={id} id={id} fileName={name} type={getType(name)} />
  ));
}

export const FileListView = memo(({ ex, fp, setSearchParams }) => {
  const classes = useStyles();
  const srcFileItems = useMemo(
    () => genFileItems(buildResults[ex].files.filter(c => c.type === "src")),
    [ex]
  );
  const distFileItems = useMemo(
    () => genFileItems(buildResults[ex].files.filter(c => c.type === "dist")),
    [ex]
  );
  const backToReadMe = useCallback(() => {
    setSearchParams({ fp: "" });
  }, []);
  return (
    <List component="nav" className={classes.root}>
      <ListSubheader component="div">Explain CSS in JS</ListSubheader>
      <EtcItem
        props={null}
        selected={fp === ""}
        onClick={backToReadMe}
        type={"md"}
        disableTypography={true}
        primary={<Typography noWrap>README.md</Typography>}
      />
      <ListSubheader component="div">設定等</ListSubheader>
      {srcFileItems}
      <Divider />
      <ListSubheader component="div">webpack処理後ファイル</ListSubheader>
      {distFileItems}
    </List>
  );
});

export function FileList(props) {
  const [{ ex, fp }, setSearchParams] = useSearchParams();
  return (
    <Box {...props}>
      <FileListView ex={ex} fp={fp} setSearchParams={setSearchParams} />
    </Box>
  );
}
