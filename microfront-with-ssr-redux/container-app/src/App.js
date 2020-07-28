import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

function AngularApp() {
  return (
    <section>
      <h2>Angular Application</h2>
    </section>
  );
}

function ReactApp() {
  return (
    <section>
      <h2>React Application</h2>
    </section>
  );
}

function VueApp() {
  return (
    <section>
      <h2>Vue Application</h2>
    </section>
  );
}

function App() {
  return (
    <Router>
      <header>
        <h1>Container Application</h1>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/angular">
          <AngularApp />
        </Route>
        <Route exact path="/react">
          <ReactApp />
        </Route>
        <Route exact path="/vue">
          <VueApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
