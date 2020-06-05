import React from "react";
import styles from "./App.css";

import { Styled } from "direflow-component";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener("usernameEvent", (event) => {
      console.log("event received");
      this.props.history.username = event.detail.username;
      this.forceUpdate();
    });
    window.addEventListener("setAuthEvent", (event) => {
      console.log("event received");
      this.props.history.isAuth = event.detail.isAuth;
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("usernameEvent", (event) => {
      console.log("event received");
      this.props.history.username = event.detail.username;
      this.forceUpdate();
    });
  }

  render() {
    const { isAuth, username, cartOrder } = this.props.history;
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
                        <div key={item.product.id} className="productList">
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

App.defaultProps = {
  history: { isAuth: false, username: "", cartOrder: [] },
};
