import React from "react";
import styles from "./App.css";

import { Styled } from "direflow-component";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isAuth: false, username: "", cartOrder: [] };
  }

  componentDidMount() {
    window.addEventListener("usernameEvent", (event) => {
      console.log("Username: event received");
      this.setState({ username: event.detail.username });
    });
    window.addEventListener("setAuthEvent", (event) => {
      console.log("Auth: event received");
      this.setState({ isAuth: event.detail.isAuth });
    });
    window.addEventListener("addProductToCart", (event) => {
      if (
        typeof this.state.cartOrder[event.detail.product.id] !== "undefined"
      ) {
        this.state.cartOrder[event.detail.product.id]["quantity"] += 1;
        this.setState({ cartOrder: this.state.cartOrder });
      } else {
        this.state.cartOrder[event.detail.product.id] = {
          product: event.detail.product,
          quantity: 1,
        };
        this.setState({ cartOrder: this.state.cartOrder });
        console.log(this.state.cartOrder);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("usernameEvent", (event) => {
      console.log("Username: event received");
      this.setState({ username: event.detail.username });
    });
    window.removeEventListener("setAuthEvent", (event) => {
      console.log("Auth: event received");
      this.setState({ isAuth: event.detail.isAuth });
    });
    window.removeEventListener("addProductToCart", (event) => {
      if (
        typeof this.state.cartOrder[event.detail.product.id] !== "undefined"
      ) {
        this.state.cartOrder[event.detail.product.id]["quantity"] += 1;
        this.setState({ cartOrder: this.state.cartOrder });
      } else {
        this.state.cartOrder[event.detail.product.id] = {
          product: event.detail.product,
          quantity: 1,
        };
        this.setState({ cartOrder: this.state.cartOrder });
        console.log(this.state.cartOrder);
      }
    });
  }

  render() {
    const { isAuth, username, cartOrder } = this.state;
    return (
      <Styled styles={styles}>
        <div className="App">
          <section className="App-header1">
            <img
              src={`${CONTENT_HOST}/images/logo.svg`}
              className="App-logo"
              alt="logo"
            />
            <h2>First React Micro-frontend</h2>
            {isAuth ? (
              <>
                <img
                  className="dog-img"
                  src="https://httpstatusdogs.com/img/200.jpg"
                  alt="dog-success"
                />
                <p>Hello {username}</p>
                <h3>Your cart</h3>
                <div className="cart">
                  {Object.keys(cartOrder).length === 0 && (
                    <p>Your cart is empty</p>
                  )}
                  {Object.keys(cartOrder).length > 0 &&
                    cartOrder.map((item) => {
                      return (
                        <div
                          id={item.product.id}
                          key={item.product.id}
                          className="productList"
                        >
                          <div className="flex item">
                            <img
                              src={item.product.imgURL}
                              className="previewImg"
                              alt={item.product.name}
                            />
                            <div>
                              <h4>{item.product.name}</h4>
                              <h6>{item.product.tags}</h6>
                            </div>

                            <h5>
                              {item.product.price} x{item.quantity}
                            </h5>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <>
                <img
                  className="dog-img"
                  src="https://httpstatusdogs.com/img/401.jpg"
                  alt="dog-denied"
                />
                <p>Authentication is necessary to access the content</p>
              </>
            )}
          </section>
        </div>
      </Styled>
    );
  }
}
