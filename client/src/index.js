import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./components/SocketContext.js";
import App from "./App.js";
import "./styles.css";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
