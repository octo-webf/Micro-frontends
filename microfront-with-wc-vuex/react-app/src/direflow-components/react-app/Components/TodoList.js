import React from "react";
import { Styled } from "direflow-component";
import TodoItem from "./TodoItem";
import styles from "./TodoList.css";
import { useGetter, useDispatch } from "../vuex-react";

export default function TodoList() {
  const getter = useGetter("getFilteredTodoList");
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    console.log(event);
    dispatch("addTodo", { text: event.target[0].value });
    event.preventDefault();
    event.target[0].value = "";
  };

  return (
    <Styled styles={styles}>
      <div className="App">
        <header>
          <h1>To-do list with Vuex</h1>
          <form onSubmit={handleAdd}>
            <input type="text" placeholder="A faire..." id="input" />
          </form>
        </header>
        <ul>
          {getter.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Styled>
  );
}
