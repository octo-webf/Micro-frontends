import React from "react";
import "./App.css";

const PARENT_APP_URL = "http://localhost:5000";
const HELLO_MESSAGE = "Hello React!";

function App() {
  const sendMessage = () => {
    window.parent.postMessage(HELLO_MESSAGE, PARENT_APP_URL);
  };

  return (
    <div className="firstApp">
      <div>
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
      </div>
      <button className="btn" onClick={sendMessage}>
        Say hello!
      </button>
    </div>
  );
}

export default App;
