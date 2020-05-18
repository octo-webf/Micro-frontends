import React from "react";
import styles from "./App.styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles);

const PARENT_APP_URL = "http://localhost:5000";
const HELLO_MESSAGE = "Hello React!";

function App() {
  const classes = useStyles();

  const sendMessage = () => {
    window.parent.postMessage(HELLO_MESSAGE, PARENT_APP_URL);
  };

  return (
    <div className={classes.firstApp}>
      <div>
        <h1>React 1</h1>
        <p>First Micro-frontend</p>
      </div>
      <button className={classes.btn} onClick={sendMessage}>
        Say hello!
      </button>
    </div>
  );
}

export default App;
