import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Router</h1>
        <div className='navigators'>
          <Link to={'/'}>Home</Link>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/products'}>Product</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
