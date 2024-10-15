import React, { useContext, useState } from 'react';
import './CheckOut.css';
import { ShopContext } from '../../Context/ShopContext';

const CheckOut = () => {

    const {getTotalCartAmount} = useContext(ShopContext);
    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
        address:"",
        country:"",
        city:"",
        state:"",
        pincode:"",
        totalAmount: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const shipping_address = {
            first_name: formData.fname,
            last_name: formData.lname,
            address: formData.address,
            email: formData.email,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            pincode: formData.pincode,
            phone_number: formData.mobile,
            date: new Date().toLocaleString("en-US", {
                month: "short",
                day:"2-digit",
                year:"numeric",
            }),
        };

        var options = {
            key: "rzp_test_skmqvgGVOopOmO",
            key_secret:"jqKEKy4hFfbzfsK1EjuNPfEV",
            amount: parseInt(getTotalCartAmount())*100,
            currency: "USD",
            name: "eshop",
            description:"for testing purpose",
            handler: function(response) {
                const paymentId = response.razorpay_payment_id;
                console.log("payment id", paymentId, shipping_address);
                setFormData({
                    fname:"",
                    lname:"",
                    email:"",
                    mobile:"",
                    address:"",
                    country:"",
                    city:"",
                    state:"",
                    pincode:"",
                    totalAmount: getTotalCartAmount(),
                });
            },
            theme: {
                color:"#07a291db",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
        
    };


  return (
    <div className='checkout-container'>
        <form onSubmit={handleSubmit}>
        <div className='shipping-address'>
            <h2>Shipping Address</h2>
            <p>All fields required</p>
            
            <div className='address-fields'>
                <input 
                type='text' 
                placeholder='First Name'
                name='fname'
                value={formData.fname}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='Last Name'
                name='lname'
                value={formData.lname}
                onChange={handleChange}
                />
                <input 
                type='email' 
                placeholder='Email Address'
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
                <input 
                type='number' 
                placeholder='Mobile Number'
                name='mobile'
                minLength={10}
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='Delivery Address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='City'
                name='city'
                value={formData.city}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='State'
                name='state'
                value={formData.state}
                onChange={handleChange}
                />
                <input 
                type='number' 
                placeholder='Pin Code'
                name='pincode'
                value={formData.pincode}
                onChange={handleChange}
                />
                <input 
                type='text' 
                placeholder='Country'
                name='country'
                value={formData.country}
                onChange={handleChange}
                />
                
            </div>
            
        </div>
        <div className='payment-container'>
            <div className='payment-method'>
                <h3>Select Payment Method</h3>
                <div className='card'>Card</div>
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
           <button type='submit'>PAY NOW </button>
        </div>
        </form>

    </div>
  );
};

export default CheckOut;