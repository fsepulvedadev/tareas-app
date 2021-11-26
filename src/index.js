import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center w-full">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
