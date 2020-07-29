import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li className="home">
          <Link className="link homelink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" activeClassName="activelink" to="/angular">
            Angular
          </Link>
        </li>
        <li>
          <Link className="link" activeClassName="activelink" to="/react">
            React
          </Link>
        </li>
        <li>
          <Link className="link" activeClassName="activelink" to="/vue">
            Vue
          </Link>
        </li>
      </ul>
    </nav>
  );
}
