import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";

export default function App() {
  let basket = [];
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    basket = useSelector(window.selectors.getVisibleBasket);
  }

  const handleGoBack = () => {
    console.log("go back");
  };

  const handleDeleteOne = (id) => {
    dispatch(window.actions.removeFromBasket(id));
  };

  const handleDeleteAll = () => {
    dispatch(window.actions.removeAllFromBasket());
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Panier</h2>
      {basket.length === 0 ? (
        <>
          <h3>Votre panier est vide...</h3>
        </>
      ) : (
        basket.map((item) => {
          return (
            <div key={item.id} className={cx(styles.flex, styles.spaced)}>
              <div className={styles.flex}>
                <img src={item.product.imgURL} className={styles.image} />
                <div>
                  <p className={styles.h3}>{item.product.name}</p>
                  <p className={styles.h6}>{item.product.tags}</p>
                </div>
              </div>
              <div
                className={cx(styles.flex, styles.spaced)}
                style={{ width: "15%" }}
              >
                <div className={styles.h3}>
                  {item.product.price} x{item.quantity}
                </div>
                <img
                  src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                  className={styles.trash}
                  onClick={() => handleDeleteOne(item.id)}
                />
              </div>
            </div>
          );
        })
      )}
      <div className={cx(styles.flex, styles.spaced)}>
        <button
          className={cx(styles.btn, styles.btn_back)}
          onClick={handleGoBack}
        >
          Retour aux achats
        </button>
        {basket.length !== 0 && (
          <button
            className={cx(styles.btn, styles.btn_danger)}
            onClick={handleDeleteAll}
          >
            Tout supprimer
          </button>
        )}
      </div>
    </section>
  );
}
