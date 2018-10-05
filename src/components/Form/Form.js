import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      productName: '',
      price: 0
    };
    this.handleChangeURL = this.handleChangeURL.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleAddToInventory = this.handleAddToInventory.bind(this);
  }

  handleChangeURL(event) {
    this.setState({imageURL: event.target.value});
  }
  handleChangeName(event) {
    this.setState({productName: event.target.value});
  }
  handleChangePrice(event) {
    this.setState({price: event.target.value});
    
  }
  clearState(){
    this.setState({imageURL: '', productName: '', price: 0});
    console.log(this.state);
  }
  handleAddToInventory() {
    //TODO
  }

  render() {
    return (
      <div className="Form">
      <p>Image URL:</p>
        <input type="text" value={this.state.imageURL} onChange={this.handleChangeURL}/>
        <p>Product Name:</p>
        <input type="text" value={this.state.productName} onChange={this.handleChangeName}/>
        <p>Price</p>
        <input type="text" pattern="[0-9]*" value={this.state.price} onChange={this.handleChangePrice}/>
        <div className="form_button">
          <button onClick={this.clearState}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
