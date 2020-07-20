import React from "react";
import { Styled } from "direflow-component";
import styles from "./TodoFooter.css";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../constants";
import { useDispatch } from "../vuex-react";

export default function TodoFooter() {
  const dispatch = useDispatch();
  return (
    <Styled styles={styles}>
      <footer>
        <div className="filters">
          <button
            onClick={() =>
              dispatch("setVisibilityFilter", { filter: SHOW_ALL })
            }
          >
            All
          </button>
          <button
            onClick={() =>
              dispatch("setVisibilityFilter", { filter: SHOW_ACTIVE })
            }
          >
            Active
          </button>
          <button
            onClick={() =>
              dispatch("setVisibilityFilter", { filter: SHOW_COMPLETED })
            }
          >
            Completed
          </button>
        </div>
        <div className="deletion">
          <p className="clear" onClick={() => dispatch("clearCompleted")}>
            Clear completed
          </p>
          <p className="delete" onClick={() => dispatch("deleteAllTodo")}>
            Delete all
          </p>
        </div>
      </footer>
    </Styled>
  );
}
