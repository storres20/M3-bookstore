import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <NavLink to="/">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </div>
  );
}

export default Navbar;
