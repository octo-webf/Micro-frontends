import React, { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState("...");
  return (
    <div className="thirdApp">
      <div>
        <h1>React 3</h1>
        <p>Third Micro-frontend</p>
      </div>
      <p className="info">{info}</p>
    </div>
  );
}

export default App;
