import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
const Navbar = () => {
    return (
      <nav>
        <div className="navbar-container">
          <h1 className="navbar-logo">City Portal</h1>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/report-issue">Report Issue</Link></li>
            <li><Link to="/city-services">City Services</Link></li>
            <li><Link to="/city-data">City Data</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
export default Navbar;

