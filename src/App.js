import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


const dummyData = [
  {imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
  productName: 'Cheap Watch',
price: 4.99}, 
{imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
  productName: 'Cheap Watch1',
price: 14.99}, 
{imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
  productName: 'Cheap Watch2',
price: 24.99}, 
{imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
  productName: 'Cheap Watch3',
price: 34.99}, 
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard inventoryList = {dummyData} />
        <Form />
        <Header />
        
      </div>
    );
  }
}

export default App;
