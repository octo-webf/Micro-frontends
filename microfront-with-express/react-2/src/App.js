import React from "react";
import "./App.css";

const APP_URL = "http://localhost:5000";

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
    window.removeEventListener("message", this.getMessage, false);
  }

  getMessage(event) {
    if (event.origin !== APP_URL) {
      return;
    }
    if (event.data.microfront === "*" || event.data.microfront === 2) {
      this.setState({ info: event.data.message });
    }
  }

  render() {
    return (
      <div className="secondApp">
        <div>
          <h1>React 2</h1>
          <p>Second Micro-frontend</p>
        </div>
        <p className="info-2">{this.state.info}</p>
      </div>
    );
  }
}

export default App;
