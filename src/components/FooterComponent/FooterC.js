import React from 'react';
import './FooterC.css';

const FooterC = () => {
  return (
    <footer className='footer-container'>
      <div className='f-section1'>
        <ul>
            <h4>About_Us</h4>
            <li>Careers</li>
            <li>Blog</li>
            <li>About us</li>
            <li>Invester Relations</li>
        </ul>
        <ul>
            <h4>Make Money with Us</h4>
            <li>Sell Products</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Invester Relations</li>
        </ul>
        <ul>
            <h4>Let Us Help You</h4>
            <li>Your Orders</li>
            <li>Your Account</li>
            <li>Shipping Rates and Policies</li>
            <li>Returns & Replacements</li>
            <li>Help</li>
        </ul>
        </div>
        <div className='f-section2'>
         <p>&copy; 2004 E-commerce.com pvt ltd. </p>
         </div>
    </footer>
     
  );
};

export default FooterC;