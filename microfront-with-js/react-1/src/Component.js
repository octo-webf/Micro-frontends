import React from "react";
import "./Component.css";

function Component(props) {
  return (
    <div class="component">
      <h3>React Component</h3>
      <p>clics: {props.info}</p>
    </div>
  );
}

export default Component;
