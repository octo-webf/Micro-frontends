import React from "react";
import "./Button.css";
import { Styled } from "direflow-component";
import styles from "./Button.css";
import { useDispatch } from "react-redux";

function Button(props) {
  const product = props.product;
  const dispatch = useDispatch();

  const handleClickBasket = () => {
    dispatch(window.actions.addToBasket(product));
  };

  return (
    <Styled styles={styles}>
      <button onClick={handleClickBasket}>
        Ajouter {product.name} au panier
      </button>
    </Styled>
  );
}

export default Button;
