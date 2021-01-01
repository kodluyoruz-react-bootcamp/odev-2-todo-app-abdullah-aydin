import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//notification
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      autoClose={2500}
      hideProgressBar={true}
      closeOnClick
    />
  </React.StrictMode>,
  document.getElementById("root")
);
