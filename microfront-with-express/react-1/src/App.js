import React from "react";
import styles from "./styles.js";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.firstApp}>
      <h1>React 1</h1>
      <p>First Micro-frontend</p>
    </div>
  );
}

export default App;
