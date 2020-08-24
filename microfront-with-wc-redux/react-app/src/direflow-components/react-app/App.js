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
        <ul>
          {basket.length === 0 ? (
            <>
              <li className="empty-basket">Votre panier est vide...</li>
            </>
          ) : (
            basket.map((item) => {
              return (
                <li
                  id={item.product.id}
                  key={item.id}
                  className="flex spaced box"
                >
                  <div className="flex" style={{ width: "80%" }}>
                    <img src={item.product.imgURL} className="image" />
                    <div>
                      <h3>{item.product.name}</h3>
                      <p>{item.product.tags}</p>
                    </div>
                  </div>
                  <div className="flex spaced" style={{ width: "15%" }}>
                    <p className="description">
                      {item.product.price} x{item.quantity}
                    </p>
                    <button
                      className="btn-trash"
                      onClick={() => handleDeleteOne(item.id)}
                    >
                      <img
                        src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                        className="trash"
                        alt="delete item"
                      />
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
        <div className="flex spaced">
          <button className="btn btn-back" onClick={handleGoBack}>
            Retour aux achats
          </button>
          {basket.length !== 0 && (
            <button className="btn btn-deleteall" onClick={handleDeleteAll}>
              Tout supprimer
            </button>
          )}
        </div>
      </section>
    </Styled>
  );
}
