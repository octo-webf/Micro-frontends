import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isRedirected, setRedirected] = useState(false);

  useEffect(() => {
    window.addEventListener("redirectHome", handleRedirectHome);
  }, []);

  const handleRedirectHome = () => {
    setRedirected(true);
    setTimeout(() => {
      setRedirected(false);
    }, 100);
  };

  return (
    <BrowserRouter>
      {isRedirected && <Redirect to="/" />}
      <header>
        <h1>Party.com</h1>
        <ul>
          <li>
            <NavLink
              exact
              className="link"
              activeClassName="link-active"
              to="/"
            >
              Produits
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className="link"
              activeClassName="link-active"
              to="/basket"
            >
              Panier
            </NavLink>
          </li>
        </ul>
      </header>
      <div className="micro-frontends">
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Products() {
  return <vue-app></vue-app>;
}

function Basket() {
  return <react-app></react-app>;
}

export default App;
