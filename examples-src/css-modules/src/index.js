import React from "react";
import { render } from "react-dom";
import { S1, S2, S3 } from "./index.css";

const App = () => (
  <div>
    <h1 className={S1}>Hello</h1>
    <h2 className={S2}>Hello</h2>
  </div>
);

render(<App />, document.body.appendChild(document.createElement("div")));
