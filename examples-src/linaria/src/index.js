import React from "react";
import { render } from "react-dom";
import { css } from "linaria";
const S1 = css`
  font-size: 2em;
  color: #f90;
`;
const S2 = css`
  font-size: 1.5em;
  color: #09f;
`;
const S3 = css`
  font-size: 1.2em;
  color: #f09;
`;

const App = () => (
  <div>
    <h1 className={S1}>Hello</h1>
    <h2 className={S2}>Hello</h2>
  </div>
);

render(<App />, document.body.appendChild(document.createElement("div")));