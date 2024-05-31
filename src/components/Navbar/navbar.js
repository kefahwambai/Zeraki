import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand"></div>
      <div className="navbar-items">
        <div className="navbar-item bell-notification">
          <i className="fas fa-bell"></i>
          <span className="notification-dot"></span>
        </div>
        <div className="navbar-item">
          <i className="fas fa-cog"></i>
        </div>
        <div className="navbar-item">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}
