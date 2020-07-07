import React from "react";
import styles from "./App.css";
import { Styled } from "direflow-component";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const basket = useSelector(window.selectors.getVisibleBasket);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    const event = new CustomEvent("redirectHome");
    window.dispatchEvent(event);
    console.log(basket);
  };

  return (
    <Styled styles={styles}>
      <section>
        <h2>Panier</h2>
        {basket.length === 0 ? (
          <>
            <h5>Votre panier est vide...</h5>
            <div className="btn-back" onClick={handleGoBack}>
              Retour aux achats
            </div>
          </>
        ) : (
          basket.map((item) => {
            return (
              <div key={item.id} className="flex">
                <div>
                  <h4>{item.title}</h4>
                  <h6>{item.description}</h6>
                </div>
                <h3>
                  {item.price}€ x{item.quantity}
                </h3>
              </div>
            );
          })
        )}
        <div className="btn-back" onClick={handleGoBack}>
          Retour aux achats
        </div>
      </section>
    </Styled>
  );
}
