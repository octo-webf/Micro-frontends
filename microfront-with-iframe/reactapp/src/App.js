import React from "react";
import logo from "./logo.svg";
import "./App.css";

function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("input");
  if (myParam !== null && myParam.length > 0) {
    return myParam;
  } else {
    return "Rien pour l'instant";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Message : <code>{getQuery()}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
