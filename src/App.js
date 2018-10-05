import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


// const dummyData = [
//   {imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
//   productName: 'Cheap Watch',
// price: 4.99}, 
// {imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
//   productName: 'Cheap Watch1',
// price: 14.99}, 
// {imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
//   productName: 'Cheap Watch2',
// price: 24.99}, 
// {imageURL: 'https://li3.rightinthebox.com/images/50x50/201706/xfsq1498820092241.jpg',
//   productName: 'Cheap Watch3',
// price: 34.99}, 
// ]




class App extends Component {
  state ={
    data : []
  }
  componentDidMount(){ //async away later
    axios.get('http://localhost:8080/api/inventory')
    .then( response => {
      console.log(response.data);
      this.setState({ data: response.data });
    })
    .catch ((error) => {
      console.log('error', error)
    })
  }

  render() {
    const data = this.state.data;
    if (data.length === 0){
      return <div></div>
    } else {
    return (
      <div className="App">
        <Header />
        <div className="body">
        <Form />
        <Dashboard inventoryList = {data} />
        
        
        </div>
     
        
      </div>
    );
  }
}
}

export default App;
