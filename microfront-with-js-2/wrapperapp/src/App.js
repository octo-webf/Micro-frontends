import React from "react";
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

const BothMicroApps = () => {
  return (
    <div>
      <MicroApp1 />
      <MicroApp2 />
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <header class="title">
            <h1>Micro-frontends using JS and React</h1>
            <Navigation />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/micro-frontend-1" component={MicroApp1} />
            <Route exact path="/micro-frontend-2" component={MicroApp2} />
            <Route
              exact
              path="/both-micro-frontends"
              component={BothMicroApps}
            />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
