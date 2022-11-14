import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <ul>
    <li><NavLink to="/">Rockets</NavLink></li>
    <li><NavLink to="/missions">Missions</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
  </ul>
);

export default Header;
