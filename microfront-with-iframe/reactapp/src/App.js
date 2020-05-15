import React from "react";
import logo from "./logo.svg";
import "./App.css";

const PARENT_APPLICATION_URL = "http://localhost:5000";

const callbackMessage = "React: I got the message!";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: this.getQuery() };
  }

  // Receive information via routing parameters
  getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("input");
    if (myParam !== null && myParam.length > 0) {
      return myParam;
    } else {
      return "Nothing yet";
    }
  }

  // Receive information via DOM events
  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, false);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.receiveMessage);
  }

  receiveMessage = (event) => {
    if (event.origin !== PARENT_APPLICATION_URL) {
      return;
    }
    this.setState({ msg: event.data.info });

    // Passing information back to the parent/wrapper app
    event.source.postMessage(
      { info: callbackMessage, callback: true },
      event.origin
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Message</p>
          <p>
            <code>{this.state.msg}</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
