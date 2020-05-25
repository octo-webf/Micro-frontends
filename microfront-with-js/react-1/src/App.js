import React, { useState } from "react";
import "./App.css";
import AppTest from "./AppTest";

function App() {
  const [info, setInfo] = useState("...");

  return (
    <div className="firstApp">
      <h1>React 1</h1>
      <p>First Micro-frontend</p>
      <button onClick={() => setInfo("Coucou")}>click</button>
      <AppTest info={info} />
    </div>
  );
}

export default App;
