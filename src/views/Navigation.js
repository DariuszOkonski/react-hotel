import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container nav">
        <h2 className="nav__logo text-royal">
          <span className="text-first">
            <i className="fa fa-diamond" aria-hidden="true"></i> Hotel</span> Royal
        </h2>

        <ul className="nav__navbar navbar">
          <li className="navbar__item">
            <NavLink exact className="navbar__link" to="/">Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/about">About</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;