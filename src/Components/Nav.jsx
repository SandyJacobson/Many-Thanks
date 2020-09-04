import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className='nav'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/entries">Entries</Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
