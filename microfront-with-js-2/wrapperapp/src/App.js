import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import MicroFrontend from "./MicroFrontend";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

const {
  REACT_APP_MICRO_1: microApp1Host,
  REACT_APP_MICRO_2: microApp2Host,
} = process.env;

const MicroApp1 = ({ history }) => {
  return (
    <MicroFrontend history={history} name="MicroApp1" host={microApp1Host} />
  );
};
const MicroApp2 = ({ history }) => {
  return (
    <MicroFrontend history={history} name="MicroApp2" host={microApp2Host} />
  );
};

const BothMicroApps = ({ history }) => {
  return (
    <div>
      <MicroApp1 history={history} />
      <MicroApp2 history={history} />
    </div>
  );
};

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [cartOrder, setCartOrder] = useState([]);

  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <header className="title">
            <h1>Micro-frontends using JS and React</h1>
            <Navigation />
          </header>
          <Switch>
            <Route exact path="/">
              <Home
                props={{
                  username,
                  setUsername,
                  password,
                  setPassword,
                  isAuth,
                  setAuth,
                }}
              />
            </Route>
            <Route exact path="/micro-frontend-1">
              <MicroApp1 history={{ isAuth, username, cartOrder }} />
            </Route>
            <Route exact path="/micro-frontend-2">
              <MicroApp2 history={{ cartOrder, setCartOrder }} />
            </Route>
            <Route exact path="/both-micro-frontends">
              <BothMicroApps
                history={{ isAuth, username, cartOrder, setCartOrder }}
              />
            </Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
