import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const activeStyle = {
        fontWeight:'bold',
        color:'red'
      }

return (
    <div className="header-container">
        <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
        <NavLink to="/friends" activeStyle={activeStyle}>Friends</NavLink>
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </div>
);
};

export default Header;