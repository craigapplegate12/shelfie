import React from 'react';
import './Product.css'


function Product(name, price, image){
    console.log(name, price,image)
    return (
      <div className="Product">
        <img id="product_image" src={image} alt ='' height ={200}  width={320}/>
        <div className="product_box" >
          <div>{name}</div>
          <div>{price}</div>
          </div>
        
      </div>
    );
  }


export default Product;
