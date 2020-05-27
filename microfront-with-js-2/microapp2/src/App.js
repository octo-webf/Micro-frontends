import React, { useState } from "react";
import "./App.css";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${CONTENT_HOST}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </header>
    </div>
  );
}

export default App;
