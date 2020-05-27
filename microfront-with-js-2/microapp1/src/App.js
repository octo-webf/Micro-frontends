import React from "react";
import "./App.css";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <img
          src={`${CONTENT_HOST}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
