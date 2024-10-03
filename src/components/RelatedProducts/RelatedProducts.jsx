import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import { Link } from "react-router-dom";
const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item,i) => {
            return <div key={i} className='p-card'>
            <Link to={`/product/${item.id}`}><img onClick={window.scrollTo(0,0)} src={item.image} alt='' /></Link>
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
  );
};

export default RelatedProducts;
