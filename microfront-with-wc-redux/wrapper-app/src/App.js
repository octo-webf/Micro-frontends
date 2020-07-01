import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRedirected: false,
    };
  }

  componentDidMount() {
    window.addEventListener("redirectHome", this.handleRedirectHome);
  }
  componentWillUnmount() {
    window.removeEventListener("redirectHome", this.handleRedirectHome);
  }

  handleRedirectHome = () => {
    this.setState({ isRedirected: true });
    setTimeout(() => {
      this.setState({ isRedirected: false });
    }, 100);
  };

  render() {
    return (
      <>
        <BrowserRouter>
          {this.state.isRedirected && <Redirect to="/" />}
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
}

function Products() {
  return <vue-app></vue-app>;
}

function Basket() {
  return <react-app></react-app>;
}

export default App;
