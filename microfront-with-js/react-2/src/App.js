import React, { useState } from "react";
import "./App.css";
import Component from "./Component";

function App() {
  const [info, setInfo] = useState(0);

  return (
    <div className="secondApp flex">
      <div>
        <h1>React 2</h1>
        <p>Second Micro-frontend</p>
      </div>
      <button onClick={() => setInfo(info + 1)}>clic</button>
      <Component info={info} />
    </div>
  );
}

export default App;
