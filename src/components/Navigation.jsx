import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/images/planet.png';
import '../styles/navigation.css';

export default function Navigation() {
  const activeState = {
    textDecoration: 'underline',
    color: 'blue',
  };

  const notActiveState = {
    textDecoration: 'none',
    color: 'blue',
  };

  return (
    <nav className="nav-menu">
      <div className="brand">
        <img src={planet} alt="planet-logo" className="app-logo" />
        <h1 className="logo-title">Space Travelers Hub</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive
                ? activeState
                : {
                  ...notActiveState,
                })}
            >
              Rockets
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/missions"
              style={({ isActive }) => (isActive
                ? activeState
                : {
                  ...notActiveState,
                })}
            >
              Missions
            </NavLink>
          </li>
          <div className="nav-pipe">|</div>
          <li className="nav-link">
            <NavLink
              to="/profile"
              style={({ isActive }) => (isActive
                ? activeState
                : {
                  ...notActiveState,
                })}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
