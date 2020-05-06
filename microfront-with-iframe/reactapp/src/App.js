import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState(getQuery());

  // Receive information via routing parameters
  function getQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("input");
    if (myParam !== null && myParam.length > 0) {
      return myParam;
    } else {
      return "Nothing yet";
    }
  }

  // Receive information via DOM events
  window.addEventListener("message", receiveMessage.bind(this), false);

  function receiveMessage(event) {
    if (event.origin !== "http://localhost:5000") {
      return;
    }
    setMsg(event.data);

    // Passing information back to the parent/wrapper app
    event.source.postMessage("React: I got the message!", event.origin);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Message</p>
        <p>
          <code>{msg}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
