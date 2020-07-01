import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Party.com</h1>
          <ul>
            <li>
              <Link to="/">Produits</Link>
            </li>
            <li>
              <Link to="/basket">Panier</Link>
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
    </>
  );
}

function Products() {
  return <vue-app></vue-app>;
}

function Basket() {
  return <react-app></react-app>;
}

export default App;
