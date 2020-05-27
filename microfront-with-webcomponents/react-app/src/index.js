import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CustomElement from "./CustomElement";
import * as serviceWorker from "./serviceWorker";

class WebComponent extends HTMLElement {
  connectedCallback() {
    console.log("React connected");
    ReactDOM.render(<CustomElement />, this);
  }

  disconnectedCallback() {
    console.log("React disconnected");
    ReactDOM.unmountComponentAtNode(this);
  }
}

window.customElements.define("react-el", WebComponent);

serviceWorker.unregister();
