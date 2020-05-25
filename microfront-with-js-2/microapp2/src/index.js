import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

window.renderMicroApp2 = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

window.unmountMicroApp2 = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
