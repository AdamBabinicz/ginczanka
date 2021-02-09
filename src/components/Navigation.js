import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>start</li>
        </NavLink>
        <li className="nav-portfolio">
          poezje
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>O centaurach</li>
            </NavLink>
            <NavLink
              to="/project-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Wiersze wybrane</li>
            </NavLink>
            <NavLink
              to="/project-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Udźwignąć ...</li>
            </NavLink>
            <NavLink
              to="/project-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Krzątanina ...</li>
            </NavLink>
            <NavLink
              to="/project-5"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Wniebowstąpienie ...</li>
            </NavLink>
            <NavLink
              to="/project-6"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Mądrość ...</li>
            </NavLink>
            <NavLink
              to="/project-7"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Poezje zebrane</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>kontakt</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
