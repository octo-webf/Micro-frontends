import React from "react";
import "./App.css";

const CONTENT_HOST = process.env.REACT_APP_COMMONS_HOST;

function App({ history }) {
  return (
    <div className="App">
      <section className="App-header1">
        <img
          src={`${CONTENT_HOST}/images/logo.svg`}
          className="App-logo"
          alt="logo"
        />
        <h2>First React Micro-frontend</h2>
        {history.isAuth ? (
          <>
            <img src="https://httpstatusdogs.com/img/200.jpg" />
            <p>Hello {history.username}</p>
            <h3>Your cart</h3>
            <div class="cart">
              <p>Your cart is empty</p>
            </div>
          </>
        ) : (
          <>
            <img src="https://httpstatusdogs.com/img/401.jpg" />
            <p>Authentication is necessary to access the content</p>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
