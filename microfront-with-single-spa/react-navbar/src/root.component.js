import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./root.css";

export default function Root(props) {
  return (
    <header>
      <h1>Micro-frontends using Single-SPA</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink
                className="link"
                activeClassName="active-link"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                activeClassName="active-link"
                to="/angular"
              >
                Angular
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                activeClassName="active-link"
                to="/react"
              >
                React
              </NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="active-link" to="/vue">
                Vue
              </NavLink>
            </li>
            <li>
              <NavLink className="link" activeClassName="active-link" to="/all">
                All components
              </NavLink>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  );
}
