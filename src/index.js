import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Dummy } from "@toolmaker/dummy-react-npm-module";
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox </h1>
      <Dummy />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
