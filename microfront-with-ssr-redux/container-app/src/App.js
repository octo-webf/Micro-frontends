import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { Switch, Route } from "react-router-dom";
import loadApp from "./utils/loadApp";

class AngularApp extends React.Component {
  componentDidMount() {
    loadApp(document.querySelector("#angular-app"));
  }
  render() {
    return (
      <section>
        <h2>Angular Application</h2>
        <div id="angular-app" data-url="angular"></div>
      </section>
    );
  }
}

class ReactApp extends React.Component {
  componentDidMount() {
    loadApp(document.querySelector("#react-app"));
  }
  render() {
    return (
      <section>
        <h2>React Application</h2>
        <div id="react-app" data-url="react"></div>
      </section>
    );
  }
}

class VueApp extends React.Component {
  componentDidMount() {
    loadApp(document.querySelector("#vue-app"));
  }
  render() {
    return (
      <section>
        <h2>Vue Application</h2>
        <div id="vue-app" data-url="vue"></div>
      </section>
    );
  }
}

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/angular">
            <AngularApp />
          </Route>
          <Route path="/react">
            <ReactApp />
          </Route>
          <Route path="/vue">
            <VueApp />
          </Route>
          <Route path="/">
            <AngularApp />
            <ReactApp />
            <VueApp />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
