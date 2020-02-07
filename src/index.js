import "preact/debug";
import "./index.css";
import "./build-results-formatted";
import ReactDOM from "react-dom";
import React, { useState, useLayoutEffect } from "react";
import { AppHeader } from "./components/AppHeader";
import { AppContainer } from "./components/AppContainer";
import { useMediaQuery } from "./hooks/useMediaQuery";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  useLayoutEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: cyan,
          type: darkMode ? "dark" : "light",
        },
        typography: {
          button: {
            textTransform: "none",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AppHeader currentExampleName="styled-components" />
      <AppContainer />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
