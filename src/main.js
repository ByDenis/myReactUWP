//export * from './app.js';

import React from "react";
import ReactDOM from "react-dom";

import App from "./app-react.js";
import webgl from "./app-webgl.js";

import './styles/css.css';

ReactDOM.render(<App />, document.getElementById("root"));
