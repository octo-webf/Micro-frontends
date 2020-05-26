import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

console.log("coucou");

window.renderMicroApp1 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

window.unmountMicroApp1 = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
