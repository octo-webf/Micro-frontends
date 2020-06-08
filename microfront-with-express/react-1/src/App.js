import React from "react";
import "./App.css";

const HELLO_MESSAGE = "Hello React!";

function App() {

  return (
    <div className="firstApp">
      <div>
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
        <p>Send a message to the other Micro-frontends</p>
      </div>
      <div>
        <button className="btn" onClick={() => window.sendMessage(2, HELLO_MESSAGE)}>
          React2
        </button>
        <button className="btn" onClick={() => window.sendMessage(3, HELLO_MESSAGE)}>
          React3
        </button>
        <button className="btn" onClick={() => window.sendMessage("*", HELLO_MESSAGE)}>
          All
        </button>
        <button className="btn clear" onClick={() => window.sendMessage("*", "...")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
