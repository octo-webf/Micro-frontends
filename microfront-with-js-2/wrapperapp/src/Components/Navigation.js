import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navlink" activeClassName="navlink-active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="navlink-active"
            to="/micro-frontend-1"
          >
            First Micro-frontend
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="navlink-active"
            to="/micro-frontend-2"
          >
            Second Micro-frontend
          </NavLink>
        </li>
        <li>
          <NavLink
            className="navlink"
            activeClassName="navlink-active"
            to="/both-micro-frontends"
          >
            Both Micro-frontends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
