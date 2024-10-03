import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <div className='signup'>
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <div className='signup-fields'>
                <input type='text' placeholder='Yor Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Enter Password' />
            </div>
            <button>Continue</button>
            <p className='signup-login'>Already have an account? <span>Login here</span></p>
            <div className='signup-agree-check'>
              <input type='checkbox' name='' id='' />
              <p>By Continuing, i agree to the terms of use and privacy policy.</p>
            </div>
        </div>

    </div>
  )
}

export default Registration