import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import styles from "./App.css";
import { Styled } from "direflow-component";

export default function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {});

  const handleGoBack = () => {
    const event = new CustomEvent("redirectHome");
    window.dispatchEvent(event);
  };

  return (
    <Styled styles={styles}>
      <section>
        <h2>Panier</h2>
        {productList.length === 0 ? (
          <>
            <h5>Votre panier est vide...</h5>
            <div className="btn-back" onClick={handleGoBack}>
              Retour aux achats
            </div>
          </>
        ) : (
          productList.map((item) => {
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
      </section>
    </Styled>
  );
}
