import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="left">Waterlogged</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/new">New Log</Link>
      </nav>
    </header>
  )
};

export default Nav;