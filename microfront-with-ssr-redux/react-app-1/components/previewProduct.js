import React from "react";
import styles from "../styles/previewProduct.module.css";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions";

export default function PreviewProduct({ product }) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
    window.alert(`${product.name} was added to your basket !`);
  };

  return (
    <li>
      <button className={styles.container} onClick={handleAddToBasket}>
        <div className={styles.imageContainer}>
          <img
            className={styles.previewImage}
            src={product.imgURL}
            alt={`preview-${product.id}`}
          />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>{product.name}</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className={styles.tags}>{product.tags}</p>
            <h3 className={styles.price}>{product.price}</h3>
          </div>
        </div>
      </button>
    </li>
  );
}
