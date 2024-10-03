
import './App.css';
import NavBar from './components/NavBarComponent/NavBar';
import FooterC from './components/FooterComponent/FooterC';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/HomeComponent/Home';
import Product from '../src/components/ProductComponent/Product';
import AboutUs from '../src/components/AboutUsComponent/AboutUs';
import Cart from '../src/components/CartComponent/Cart';
import SignIn from '../src/components/UserComponent/LogInComponent/SignIn';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='main'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product/>} >
              <Route path=':productId' element={<Product/>} />
            </Route>
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signin' element={<SignIn />} />
        </Routes>
        </div>  
        <FooterC />
      </BrowserRouter>
    </div>
  );
};

export default App;
