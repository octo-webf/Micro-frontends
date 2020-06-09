import React, { useState } from "react";
import "./App.css";
import Component from "./Component";

const MESSAGE = "Hello React!";

function App() {
  const [info, setInfo] = useState(0);

  return (
    <div className="firstApp flex">
      <div class="appName">
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
      </div>
      <div class="flex">
        <button onClick={() => setInfo(info + 1)}>Clic</button>
        <button id="btn-react2" onClick={() => window.sendMessage(MESSAGE, 2, false)}>React 2</button>
        <button id="btn-react3" onClick={() => window.sendMessage(MESSAGE, 3, false)}>React 3</button>
        <button id="btn-all" onClick={() => window.sendMessage(MESSAGE, "*", false)}>All</button>
        <button id="btn-clear" class="clear" onClick={() => window.sendMessage("", "*", true)}>
          Clear
        </button>
      </div>
      <Component info={info} />
    </div>
  );
}

export default App;
