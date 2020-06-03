import React, { useState, useEffect } from "react";
import "./App.css";

const { REACT_APP_COMMONS_HOST: CONTENT_HOST } = process.env;

function App({ history }) {
  const [productList, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const [quantityOrdered, setQuantityOrdered] = useState([]);

  useEffect(() => {
    if (isLoading) {
      fetch(`${CONTENT_HOST}/productList.json`)
        .then((res) => res.json())
        .then((list) => setList(list.products))
        .then(setLoading(false));
    }
  });

  const handleClick = (product) => {
    if (
      typeof quantityOrdered[product.id] === "undefined" ||
      quantityOrdered[product.id] === null
    ) {
      quantityOrdered[product.id] = 1;
      setQuantityOrdered(quantityOrdered);
    } else {
      quantityOrdered[product.id] += 1;
      setQuantityOrdered(quantityOrdered);
    }

    const Event = new CustomEvent("addProductToCart", {
      bubbles: true,
      detail: { product: product, quantity: quantityOrdered[product.id] },
    });
    dispatchEvent(Event);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="App App-header2">
      <img
        src={`${CONTENT_HOST}/images/logo.svg`}
        className="App-logo"
        alt="logo"
      />
      <h2>Second React Micro-frontend</h2>
      <h3>Products list</h3>
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
              <div className="flex">
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
              </div>
              <h6>{product.tags}</h6>
            </div>
          );
        })}
      </div>
      {isSuccess && <p className="success">Item added !</p>}
    </div>
  );
}

export default App;
