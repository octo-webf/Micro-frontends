import React, { useState, useEffect } from "react";
import "./Button.css";
import { Styled } from "direflow-component";
import styles from "./Button.css";
import { useDispatch } from "react-redux";

function Button(props) {
  const [product, setProduct] = useState(props.product);
  const dispatch = useDispatch();

  const handleClickBasket = () => {
    console.log(product);
    dispatch(window.actions.addToBasket(product));
  };

  return (
    <Styled styles={styles}>
      <section onClick={handleClickBasket}>
        <h3>Ajouter {product.name} au panier</h3>
      </section>
    </Styled>
  );
}

export default Button;
