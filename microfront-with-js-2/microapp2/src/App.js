import React, { useState, useEffect } from "react";
import "./App.css";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

function App() {
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
    window.alert(`${product.name} has been added to the cart`);
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
            <div class="productBox" onClick={() => handleClick(product)}>
              <img src={product.imgURL} class="previewImg" alt={product.name} />
              <div className="flex">
                <h4>{product.name}</h4>
                <h5>{product.price}</h5>
              </div>
              <h6>{product.tags}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
