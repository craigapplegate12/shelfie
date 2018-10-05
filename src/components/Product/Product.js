import React from 'react';


function Product(name, price, image){
    console.log(name, price,image)
    return (
      <div className="Product">
        <div>{name}</div>
        <div>{price}</div>
        <img src={image} alt ='' />
      </div>
    );
  }


export default Product;
