import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validUser = {
    email: "user@gmail.com",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validUser.email && password === validUser.password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    }
    else {
      setError("Invalid login credentials");
    }
  };

  return (

    <div className='signin'>
      <div className='signin-container'>
        <h1>Sign In</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='signin-fields'>
            {/* <input type='text' placeholder='Your Name' /> */}
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>
          <button type='submit'>Sign In</button>
          <p className='signin-signup'>Don't have an account? <Link to='/signup'><span>SignUp here</span></Link></p>
          <div className='signin-agree-check'>
            <input type='checkbox' name='' id='' />
            <p>By Continuing, i agree to the terms of use and privacy policy.</p>
          </div>
        </form>
      </div>

    </div>

  );
};

export default SignIn;