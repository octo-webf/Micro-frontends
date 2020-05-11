import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
    if (event.origin !== "http://localhost:5000") {
      return;
    }
    this.setState({ msg: event.data });

    // Passing information back to the parent/wrapper app
    event.source.postMessage("React: I got the message!", event.origin);
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
