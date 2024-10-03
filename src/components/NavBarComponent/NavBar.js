import React, { useContext, useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const {getTotalCartItems} = useContext(ShopContext);
  
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
        <li><NavLink to="/" className={({isActive}) =>isActive?"active":""}>Home</NavLink></li>
        {/* <li><NavLink to="products" className={({isActive}) =>isActive?"active":""}>Products</NavLink></li> */}
        <li><NavLink to="aboutus" className={({isActive}) =>isActive?"active":""}>About Us</NavLink></li>
        <li><NavLink to="cart" className={({isActive}) =>isActive?"active":""}>Cart</NavLink>
        <span className='cart-count'>{getTotalCartItems()}</span>
        </li>
        <li><NavLink to="signin" className={({isActive}) =>isActive?"active":""}>SignIn</NavLink></li>
    </ul>
   </nav>
  );
};

export default NavBar;