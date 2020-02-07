import React from "react";
import { render } from "react-dom";
import { css } from "astroturf";
const styles = css`
  .S1 {
    font-size: 2em;
    color: #f90;
  }
  .S2 {
    font-size: 1.5em;
    color: #09f;
  }
  .S3 {
    font-size: 1.2em;
    color: #f09;
  }
`;

const App = () => (
  <div>
    <h1 className={styles.S1}>Hello</h1>
    <h2 className={styles.S2}>Hello</h2>
  </div>
);

render(<App />, document.body.appendChild(document.createElement("div")));
