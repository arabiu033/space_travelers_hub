import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

// const logo = require('../assets/images/planet.png');

const Header = () => (
  <div className="header">
    <div>
      <img src={logo} alt="space traveler's hub" style={{ width: '65px', height: '65px' }} />
      <span className="title">Space Travelers Hub</span>
    </div>
    <ul>
      <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
      <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
      <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Profile</NavLink></li>
    </ul>
  </div>
);

export default Header;
