import React from "react";
import TodoFooter from "./Components/TodoFooter";
import TodoList from "./Components/TodoList";
import { withStyles } from "direflow-component";
import styles from "./App.css";

const App = () => {
  return (
    <>
      <TodoList />
      <TodoFooter />
    </>
  );
};

export default withStyles(styles)(App);
