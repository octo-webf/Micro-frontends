import React, { useState, useEffect } from "react";
import styles from "./SecondApp.css";
import { Styled } from "direflow-component";

const { REACT_APP_COMMONS_HOST: CONTENT_HOST } = process.env;

export default function SecondApp() {
  const [productList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      fetch(`${CONTENT_HOST}/productList.json`)
        .then((res) => res.json())
        .then((list) => setList(list.products))
        .then(setLoading(false));
    }
  });

  const handleClick = (product) => {
    console.log("event sent");
    const event = new CustomEvent("detailProduct", {
      bubbles: true,
      detail: {
        product,
      },
    });
    window.dispatchEvent(event);
  };

  return (
    <Styled styles={styles}>
      <div className="App">
        <img
          src={`${CONTENT_HOST}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <h2>Products list details</h2>
        <div className="flex">
          {productList.map((product) => {
            return (
              <div
                key={product.id}
                className="productBox"
                onClick={() => handleClick(product)}
              >
                <img
                  src={product.imgURL}
                  className="previewImg"
                  alt={product.name}
                />
                <h4>{product.name}</h4>
                <h6>{product.tags}</h6>
                <h5>{product.price}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </Styled>
  );
}
