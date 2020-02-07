import React from "react";
import { render } from "react-dom";
import styled from "@emotion/styled";
const S1 = styled.h1`
  font-size: 2em;
  color: #f90;
`;
const S2 = styled.h2`
  font-size: 1.5em;
  color: #09f;
`;
const S3 = styled.h3`
  font-size: 1.2em;
  color: #f09;
`;

const App = () => (
  <div>
    <S1>Hello</S1>
    <S2>Hello</S2>
  </div>
);

render(<App />, document.body.appendChild(document.createElement("div")));
