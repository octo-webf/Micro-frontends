import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { CustomComponent } from './customComponent.js'

import * as serviceWorker from './serviceWorker';

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this._innerHTML = this.innerHTML;
    ReactDOM.render(<CustomComponent />, this);
  }
  disconnectedCallback(){
    ReactDOM.unmountComponentAtNode(this);
  }
}
customElements.define('react-el', MyCustomElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
