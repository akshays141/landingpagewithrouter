import React  from 'react';
import './Home.css';
import data_product from '../Assets/data';
import Offer from '../OffersComponent/Offer';
import hero_image from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import NewCollections from '../NewCollections/NewCollections';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <div className='container'>
        <div className='hero-section'>
          <div className='hero-left'>
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hero-hand-icon'>
              <p>new</p>
              <img src={hand_icon} alt=''/>
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
          </div>
          <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow} alt='' />
          </div>
          
          </div>
          <div className='hero-right'>
            <img src={hero_image} alt=''/>
            </div>         
        </div>
        <div className='feature-products'>
          <h1>Popular In Women</h1>
          <hr/>
          <div className='p-cards'>
          {data_product.map((item, i) =>{
           return <div key={i} className='p-card'>
            <Link to={`/product/${item.id}`}><img src={item.image} alt='' /></Link>
            <p>{item.name}</p>
            <div className='product-prices'>
              <div className='new-price'>
                ${item.new_price}
              </div>
              <div className='old-price'>
                ${item.old_price}
              </div>
            </div>
          </div>
          })}            
          </div>
        </div>
        <Offer/>
        <NewCollections/>
    </div>
  );
};

export default Home;