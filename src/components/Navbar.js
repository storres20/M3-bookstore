import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { BsPersonFill } from 'react-icons/bs';

function Navbar() {
  return (
    <div className="navContainer">
      <div className="navLinks">
        <NavLink to="/" className="brand">Bookstore CMS</NavLink>
        <NavLink to="/" className="navLink">BOOKS</NavLink>
        <NavLink to="/categories" className="navLink">CATEGORIES</NavLink>
      </div>
      <button type="button" className="icon-button">
        <BsPersonFill className="color" />
      </button>

    </div>
  );
}

export default Navbar;
