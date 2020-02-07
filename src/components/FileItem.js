import React, { memo, useCallback, useMemo } from "react";

import { buildResults } from "../build-results-formatted";
import { useSearchParams } from "../hooks/useSearchParams";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import VSCodeDefaultFileIcon from "../svg/vscode-icons/default_file";
import VSCodeJSFileIcon from "../svg/vscode-icons/file_type_js";
import VSCodeWebpackFileIcon from "../svg/vscode-icons/file_type_webpack";

const useStyles = makeStyles(theme => ({
  root: {},
  listItemIcon: {
    minWidth: theme.spacing(5),
  },
}));

const iconComponents = {
  md: VSCodeDefaultFileIcon,
  js: VSCodeJSFileIcon,
  webpack: VSCodeWebpackFileIcon,
};

export const EtcItem = memo(
  ({ props, selected, onClick, type, disableTypography, primary }) => {
    const classes = useStyles();
    const FileIcon = iconComponents[type];
    return (
      <ListItem button selected={selected} onClick={onClick} {...props}>
        <ListItemIcon className={classes.listItemIcon}>
          <FileIcon width="24" />
        </ListItemIcon>
        <ListItemText disableTypography={disableTypography} primary={primary} />
      </ListItem>
    );
  }
);

export function FileItem({ id, fileName, type, ...props }) {
  const [{ ex, fp }, setSearchParams] = useSearchParams();
  const TextTypography = useMemo(
    () => <Typography noWrap>{fileName}</Typography>,
    [fileName]
  );
  const onClick = useCallback(() => {
    setSearchParams({
      fp: id,
      ft:
        buildResults[ex].files.find(c => c.id === id).source === "" ? "1" : "0",
    });
  }, [ex, id]);
  return (
    <EtcItem
      props={props}
      selected={fp === id}
      onClick={onClick}
      type={type}
      disableTypography={true}
      primary={TextTypography}
    />
  );
}
