import React, { useContext, useState } from 'react';
import './CheckOut.css';
import { ShopContext } from '../../Context/ShopContext';

const CheckOut = () => {

    const [inputCard, setInputCard] = useState(false);
    const {getTotalCartAmount} = useContext(ShopContext);

const toggleInputCard = ()=>{
    setInputCard(!inputCard);
}

  return (
    <div className='checkout-container'>
        <div className='shipping-address'>
            <h2>Shipping Address</h2>
            <p>All fields required</p>
            <div className='address-fields'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='number' placeholder='Mobile Number'/>
                <input type='text' placeholder='Delivery Address'/>
                <input type='text'/>
                <input type='text' placeholder='Town'/>
                <input type='text' placeholder='State'/>
                <input type='number' placeholder='Pin Code'/>
                <input type='text' placeholder='Country'/>
                
            </div>
            <input className='checkbox' type='checkbox'/> Same billing address
        </div>
        <div className='payment-container'>
            <div className='payment-method'>
                <h3>Select Payment Method</h3>
                <div className={inputCard?'card show':'card'} onClick={toggleInputCard}>Card</div>
                <div className='stripe'>Stripe</div>
            </div>
            <div className='order-summary'>
                <h2>Order Summary</h2>
                <div className='subtotal'>
                <p>Subtotal</p>
                <span>${getTotalCartAmount()}</span>
                </div>
                <div className='shipping'>
                <p>Shipping</p>
                <span>Free</span>
                </div>
            </div>
            <div className='order-total'>
                <h3>Order Total</h3>
                <h2>${getTotalCartAmount()}</h2>
            </div>
            <input type='checkbox'/>
            <span> I'm keen for new releases and subscriber exclusives. Sign me up!</span> 
            <button onClick={() =>{alert('Your Order placed suceessfully!')}}>PAY NOW </button>
        </div>

    </div>
  );
};

export default CheckOut;