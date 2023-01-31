import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/images/planet.png';
import '../styles/navigation.css';

export default function Navigation() {
  return (
    <nav className="nav-menu">
      <div className="logo-title">
        <img src={planet} alt="planet-logo" className="app-logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
