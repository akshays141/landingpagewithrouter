import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Home from './components/HomeComponent/Home';
import Products from './components/ProductsComponent/Products';
import Cart from './components/CartComponent/Cart';
import App from './App';
import SignIn from './components/UserComponent/LogInComponent/SignIn';
import AboutUs from './components/AboutUsComponent/AboutUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='home' element={<Home/>} />
      <Route path='products' element={<Products/>} />
      <Route path='aboutus' element={<AboutUs/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='signin' element={<SignIn/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
