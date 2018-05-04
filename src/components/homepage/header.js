import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <ul className="navbar">
          <li className="navbar-brand">
            <NavLink to="/">
              <img src="images/logo.png" />
              <p>skaitmeninis<br />verslas</p>
            </NavLink>
          </li>
          <li><NavLink to="/apie-mus">apie mus</NavLink></li>
          <li><NavLink to="/kontaktai">kontaktai</NavLink></li>
          <li className="langs">
            <ul className="langs-items">
              <li><NavLink to="/">lt</NavLink></li>
              <li><NavLink to="/en">en</NavLink></li>
              <li><NavLink to="/ru">ru</NavLink></li>
            </ul>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
