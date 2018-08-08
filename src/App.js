import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './Components/InputComponent';
import CheckboxComponent from './Components/CheckboxComponent';
import OutputList from './Components/OutputList';
import ReactDOM from 'react-dom';
import data from './data'
class App extends Component {
  state = {
      isChecked: false,
      text: "",
      stt: 0,    
  }
handleChangeChk = () =>{
       this.setState(
           {
              stt: 0,
              isChecked: !this.state.isChecked,
           }
      );
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
     
          <InputComponent  changed = {this.handletext}  />
          <CheckboxComponent  st = {this.state.isChecked} clicked = {this.handleChangeChk}/>
          <OutputList textdata = {this.state.text} flag = {this.state.stt} list = {data} check = {this.state.isChecked}/>
      </div>
      </div>
    );
  }
}
export default App;
