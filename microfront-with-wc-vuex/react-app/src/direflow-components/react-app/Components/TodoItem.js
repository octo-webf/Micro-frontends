import React, { useState } from "react";
import { Styled } from "direflow-component";
import styles from "./TodoItem.css";
import { useDispatch } from "../vuex-react";

export default function TodoItem(props) {
  const item = props.item;
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(item.text);
  const dispatch = useDispatch();

  const handleEdit = (event) => {
    dispatch("editTodo", { id: item.id, text: event.target[0].value });
    event.preventDefault();
    setEdit(!isEdit);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Styled styles={styles}>
      <li className="item">
        {isEdit ? (
          <div>
            <form onSubmit={handleEdit}>
              <input
                type="text"
                value={text}
                className="form"
                onChange={handleChange}
              />
            </form>
          </div>
        ) : (
          <div className="flex">
            <img
              src="https://image.flaticon.com/icons/svg/1442/1442912.svg"
              alt="check"
              className="icon"
              onClick={() => dispatch("markCompleted", { id: item.id })}
            />
            {item.completed ? (
              <p onClick={() => setEdit(!isEdit)} className="completed">
                {item.text}
              </p>
            ) : (
              <p onClick={() => setEdit(!isEdit)}>{item.text}</p>
            )}
            <img
              src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
              alt="delete"
              className="icon"
              onClick={() => dispatch("deleteTodo", { id: item.id })}
            />
          </div>
        )}
      </li>
    </Styled>
  );
}
