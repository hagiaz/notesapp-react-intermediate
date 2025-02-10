/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiHome, FiPlusCircle, FiLogOut, FiArchive } from 'react-icons/fi';
 
function Navigation({logout, name}) {
  return (
    <nav className="navbar">
      <ul className='navbar-links'>
        <li className='tagline'>Your Personal Notes Web App</li>
      </ul>
      <ul className='navbar-links'>
        <li><Link to="/"><FiHome /></Link></li>
        <li><Link to="/add"><FiPlusCircle /></Link></li>
        <li><Link to="/archived"><FiArchive /></Link></li>
        <li><button className='logout-button' onClick={logout}><FiLogOut /></button></li>
        <li> Hello, {name} </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default Navigation;