import React from "react";
import "./App.css";
import Component from "./Component";

const PARENT_APPLICATION_URL = "http://localhost:7000";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: 0,
      message: "",
    };
  }
  componentDidMount() {
    window.addEventListener(
      "message",
      this.handleMessageEvent.bind(this),
      false
    );
  }

  handleMessageEvent(event) {
    if (event.origin !== PARENT_APPLICATION_URL) {
      return;
    }
    if (event.data.targetApp === "*" || event.data.targetApp === 3) {
      if (event.data.clear) {
        this.setState({ message: "" });
        return;
      }
      this.setState({ message: "Received message: " + event.data.message });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("message");
  }

  render() {
    return (
      <div className="thirdApp">
        <div className="flex">
          <div class="appName">
            <h1>React 3</h1>
            <p>Third Micro-frontend</p>
          </div>
          <button onClick={() => this.setState({ info: this.state.info + 1 })}>
            Clic
          </button>
          <Component info={this.state.info} />
        </div>
        <p class="message">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
