import React, { useState } from "react";
import "./App.css";
import Component from "./Component";

function App() {
  const [info, setInfo] = useState(0);

  return (
    <div className="firstApp flex">
      <div>
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
      </div>
      <div class="flex">
        <button onClick={() => setInfo(info + 1)}>clic</button>
        <button onClick={() => console.log("react2")}>React 2</button>
        <button onClick={() => console.log("All")}>All</button>
      </div>
      <Component info={info} />
    </div>
  );
}

export default App;
