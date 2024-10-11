
import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedCheckout = ({children}) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(!isLoggedIn){
        return <Navigate to="/signin" />;
    }

  return children;
};

export default ProtectedCheckout;