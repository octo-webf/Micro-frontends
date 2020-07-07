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
  };

  const handleDeleteOne = (id) => {
    dispatch(window.actions.removeFromBasket(id));
  };

  const handleDeleteAll = () => {
    dispatch(window.actions.removeAllFromBasket());
  };

  return (
    <Styled styles={styles}>
      <section>
        <h2>Panier</h2>
        {basket.length === 0 ? (
          <>
            <h5>Votre panier est vide...</h5>
          </>
        ) : (
          basket.map((item) => {
            return (
              <div key={item.id} className="flex spaced box">
                <div className="flex" style={{ width: "80%" }}>
                  <img src={item.product.imgURL} className="image" />
                  <div>
                    <h3>{item.product.name}</h3>
                    <h6>{item.product.tags}</h6>
                  </div>
                </div>
                <div className="flex spaced" style={{ width: "15%" }}>
                  <h3>
                    {item.product.price} x{item.quantity}
                  </h3>
                  <img
                    src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                    className="trash"
                    onClick={() => handleDeleteOne(item.id)}
                  />
                </div>
              </div>
            );
          })
        )}
        <div className="flex spaced">
          <div className="btn btn-back" onClick={handleGoBack}>
            Retour aux achats
          </div>
          {basket.length !== 0 && (
            <div className="btn btn-danger" onClick={handleDeleteAll}>
              Tout supprimer
            </div>
          )}
        </div>
      </section>
    </Styled>
  );
}
