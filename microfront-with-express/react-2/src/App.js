import React, { useState, useEffect } from "react";
import styles from "./App.styles";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: "...",
    };
  }

  componentDidMount() {
    window.addEventListener("message", this.getMessage.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener(
      "message",
      (event) => this.getMessage(event),
      false
    );
  }

  getMessage(event) {
    this.setState({ info: event.data });
  }

  render() {
    return (
      <div>
        <div>
          <h1>React 2</h1>
          <p>Second Micro-frontend</p>
        </div>
        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default App;
