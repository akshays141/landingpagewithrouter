import React, { useContext, useState } from 'react';
import './NavBar.css';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import eshop_logo from '../Assets/eshop_logo.png';
import cross_icon from '../Assets/cross_icon.png';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  

  const {getTotalCartItems} = useContext(ShopContext);
  
  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  };

  function handleLogout(){
    localStorage.removeItem('isLoggedIn');
   
  }

  return (
   <nav>
    <Link to='/'><img src={eshop_logo} alt="" className='logo' /></Link>
    <div className='hamburger' onClick={toggleMenu}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </div>
    <div className={showMenu?'hide-menu-icon show':'hide-menu-icon'} onClick={toggleMenu}>
      <img src={cross_icon} alt=''/>
    </div>
    <ul className={showMenu? 'menu-link show':'menu-link'} >
        <li><NavLink to="/" className={({isActive}) =>isActive?"active":""}>Home</NavLink></li>
        {/* <li><NavLink to="products" className={({isActive}) =>isActive?"active":""}>Products</NavLink></li> */}
        <li><NavLink to="/aboutus" className={({isActive}) =>isActive?"active":""}>About Us</NavLink></li>
        <li><NavLink to="/cart" className={({isActive}) =>isActive?"active":""}>Cart</NavLink>
        <span className='cart-count'>{getTotalCartItems()}</span>
        </li>
        <li><NavLink to="/signin" className={({isActive}) =>isActive?"active":""}>{isLoggedIn?<button onClick={handleLogout}>Sign Out</button>:<button>Sign In</button>}</NavLink></li>
    </ul>
   </nav>
  );
};

export default NavBar;