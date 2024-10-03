import React from 'react';
import './NewCollections.css';
import new_collections from '../Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((item,i) => {
                 return <div key={i} className='p-card'>
                 <img src={item.image} alt='' /> 
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
  )
}

export default NewCollections