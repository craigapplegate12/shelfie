import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
  
  render() {
    console.log(this.props.inventoryList);
    const inventory = this.props.inventoryList.map(
      item => {
        const itemName = item.productName;
        const itemPrice = item.price;
        const itemImage = item.imageURL;
        return Product(itemName, itemPrice, itemImage);
        
      }
      
    );
    
    
    return (
      <div className="Dashboard">      
      {inventory}
      </div>
    );
  }
}

export default Dashboard;
