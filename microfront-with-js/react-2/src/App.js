import React, { useState } from "react";
import "./App.css";
import AppTest from "./AppTest";

function App() {
  const [info, setInfo] = useState("...");

  return (
    <div className="secondApp">
      <h1>React 2</h1>
      <p>Second Micro-frontend</p>
      <button onClick={() => setInfo("Coucou")}>click</button>
      <AppTest info={info} />
    </div>
  );
}

export default App;
