import React, { useCallback } from "react";

import { useSearchParams } from "../hooks/useSearchParams";
import { buildResults, exampleNames } from "../build-results-formatted";

import bytes from "bytes";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
  },
  listItem: {
    //paddingTop: 0,
    //paddingBottom: 0,
  },
  listItemTextPrimary: {
    fontSize: "1.1rem",
  },
}));

export function ExampleList(props) {
  const [{ ex }, setSearchParams] = useSearchParams();
  const classes = useStyles();
  const onClick = useCallback(({ currentTarget }) => {
    const { name } = currentTarget.dataset;
    setSearchParams(({ ex, fp }) => {
      const currentFile = buildResults[ex].files.find(({ id }) => id === fp);
      let nextFile = null;
      if (currentFile) {
        nextFile = buildResults[name].files.find(
          ({ rawName }) => rawName === currentFile.rawName
        );
      }
      if (!nextFile) {
        nextFile = buildResults[name].files.find(({ name }) =>
          name.match(/^src\/index\.js/)
        );
      }
      return {
        ex: name,
        fp: nextFile.id,
        ft: nextFile.source === "" ? "1" : "0",
      };
    });
  }, []);
  return (
    <List className={classes.root} {...props}>
      {exampleNames.map(name => (
        <ListItem
          key={`exl-${name}`}
          button
          selected={ex === name}
          className={classes.listItem}
          onClick={onClick}
          data-name={name}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemTextPrimary }}
            primary={name}
            secondary={`bundleSize: ${bytes(buildResults[name].size, {
              unitSeparator: " ",
            })}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
