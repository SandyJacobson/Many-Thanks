import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <nav>
        <div className="display">
          <div className="home-link">
            <Link to="/">Home</Link>
          </div>
          <div className="about-link">
            <Link to="/about">About</Link>
          </div>
          <div className="entries-link">
            <Link to="/entries">Entries</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
