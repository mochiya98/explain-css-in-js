import React, { memo, useCallback, useState } from "react";

import { useSearchParams } from "../hooks/useSearchParams";
import { ExampleList } from "./ExampleList";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export const ClickableAppBar = memo(({ onClick, title, ...props }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="default" {...props}>
      <CardActionArea onClick={onClick}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </CardActionArea>
    </AppBar>
  );
});

export function AppHeader() {
  const [{ ex }] = useSearchParams();
  const [exampleDrawerOpened, setExampleDrawerOpened] = useState(false);
  const openExampleDrawer = useCallback(() => setExampleDrawerOpened(true), []);
  const closeExampleDrawer = useCallback(
    () => setExampleDrawerOpened(false),
    []
  );
  return (
    <Box>
      <ClickableAppBar onClick={openExampleDrawer} title={ex} />
      <Drawer
        anchor="top"
        open={exampleDrawerOpened}
        onClose={closeExampleDrawer}
      >
        <ExampleList onClick={closeExampleDrawer} />
      </Drawer>
    </Box>
  );
}
