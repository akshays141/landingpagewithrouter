import React from 'react';
import './Offer.css';
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=''></img>
        </div>
    </div>
  )
}

export default Offer