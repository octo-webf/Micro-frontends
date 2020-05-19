import React from "react";
import "./App.css";

const PARENT_APP_URL = "http://localhost:8000";
const HELLO_MESSAGE = "Hello React!";

function App() {
  const sendMessage = (number, message) => {
    window.postMessage(
      { message: message, microfront: number },
      PARENT_APP_URL
    );
  };

  return (
    <div className="firstApp">
      <div>
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
        <p>Send a message to the other Micro-frontends</p>
      </div>
      <div>
        <button className="btn" onClick={() => sendMessage(2, HELLO_MESSAGE)}>
          React2
        </button>
        <button className="btn" onClick={() => sendMessage(3, HELLO_MESSAGE)}>
          React3
        </button>
        <button className="btn" onClick={() => sendMessage("*", HELLO_MESSAGE)}>
          All
        </button>
        <button className="btn clear" onClick={() => sendMessage("*", "...")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
