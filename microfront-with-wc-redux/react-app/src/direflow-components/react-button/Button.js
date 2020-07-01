import React from "react";
import "./Button.css";
import { Styled } from "direflow-component";
import styles from "./Button.css";

export default function Button(props) {
  const handleClickBasket = () => {
    console.log(props);
  };

  return (
    <Styled styles={styles}>
      <section onClick={handleClickBasket}>
        <h3>Ajouter {props.title} au panier</h3>
      </section>
    </Styled>
  );
}

Button.defaultProps = {
  title: "N/A",
};
