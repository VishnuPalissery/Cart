import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './Components/InputComponent';
import CheckboxComponent from './Components/CheckboxComponent';
import OutputList from './Components/OutputList';
import ReactDOM from 'react-dom';


class App extends Component {
  state = {
      isChecked: false,
      text: "",
      stt: 0,
      data: [
        {
          name: 'FootBall',
          price: '$49.99',
          inStock: true,
          type: 'Sports'
        },
        {
          name: 'BaseBall',
          price: '$9.99',
          inStock: true,
          type: 'Sports'
        },
        {
          name: 'BasketBall',
          price: '$29.99',
          inStock: false,
          type: 'Sports'
        },
        {
          name: 'iPod Touch',
          price: '$99.99',
          inStock: true,
          type: 'Electronics'
        },
        {
          name: 'iPhone 5',
          price: '$399.99',
          inStock: false,
          type: 'Electronics'
        },
        {
          name: 'Nexus 7',
          price: '$199.99',
          inStock: true,
          type: 'Electronics'
        },
      ]
  }
handleChangeChk = () =>{
  
    //console.log(this.isChecked);
       this.setState(
           {
              stt: 0,
              isChecked: !this.state.isChecked,
           }
      );
     //window.alert(this.state.isChecked);
 }

 handletext = (event) =>{
   
  event.preventDefault();
if(event.keyCode === 13){
  this.setState (
    {
      text: event.target.value,
      stt: 1
    }
  );
 
}
}

  render() {

    const style = {
      color: 'white'
    }
    return (
      <div>
      <header className="App-header">
      <h1  className="App-title">Welcome to EasySearch</h1>
      <img src={logo} />

    </header>
    
      <div className="App"> 
     
          <InputComponent  changed = {this.handletext.bind(this)}  />
          <CheckboxComponent  st = {this.state.isChecked} clicked = {this.handleChangeChk}/>
          <OutputList textdata = {this.state.text} flag = {this.state.stt} list = {this.state.data} check = {this.state.isChecked}/>
      </div>
      </div>
    );
  }
}

export default App;
