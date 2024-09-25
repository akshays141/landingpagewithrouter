import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  };

  return (
   <nav>
    <img src="./logo.png" alt="" className='logo' />
    <div className='hamburger' onClick={toggleMenu}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </div>
    <ul className={showMenu? 'menu-link show':'menu-link'} >
        <li><NavLink to="/home" className={({isActive}) =>isActive?"active":""}>Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/signin">SignIn</NavLink></li>
    </ul>
   </nav>
  );
};

export default NavBar;