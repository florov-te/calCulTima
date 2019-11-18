import React from 'react';
import './App.css';

class App extends React.Component{
    constructor(){
      super();
      this.state={
        value: '',
    }
    this.TextInputRef = React.createRef();
    this.setTextInputRef=(element)=>{
    this.TextInputRef=element
    }
    }
    buttonPressedNumber = (e) => {
    this.setState({value:`${this.TextInputRef.current.value}${e.target.name}`})
  }
    buttonPressedEqually=(e)=>{
         this.setState({
           value: ``,
        value:eval(`${this.TextInputRef.current.value}`)
         })
       }
    buttonPressedDelete=(e)=>{
         this.setState({
           value:``,
           value1:``,
           sign:``
         })
       }
    render() {
        return (
          <div className="flex-container">
            <div className="block-calcul">
            <form name="form"><input id='inputnum' defaultValue={this.state.value} ref={this.TextInputRef} type="text" name="textview" className="input"/></form>
              <div className="flex-block">
                <button className="flex-element" name="7" onClick={this.buttonPressedNumber}>7</button>
                <button className="flex-element" name="8" onClick={this.buttonPressedNumber}>8</button>
                <button className="flex-element" name="9" onClick={this.buttonPressedNumber}>9</button>
                <button className="flex-element" name="+" onClick={this.buttonPressedNumber}>+</button>
              </div>
              <div className="flex-block">
                <button className="flex-element" name="4" onClick={this.buttonPressedNumber}>4</button>
                <button className="flex-element" name="5" onClick={this.buttonPressedNumber}>5</button>
                <button className="flex-element" name="6" onClick={this.buttonPressedNumber}>6</button>
                <button className="flex-element" name="-" onClick={this.buttonPressedNumber}>-</button>
              </div>
              <div className="flex-block">
                <button className="flex-element" name="1" onClick={this.buttonPressedNumber}>1</button>
                <button className="flex-element" name="2" onClick={this.buttonPressedNumber}>2</button>
                <button className="flex-element" name="3" onClick={this.buttonPressedNumber}>3</button>
                <button className="flex-element" name="*" onClick={this.buttonPressedNumber}>*</button>
              </div>
              <div className="flex-block">
                <button className="flex-element" name="C" onClick={this.buttonPressedDelete}>C</button>
                <button className="flex-element" name="0" onClick={this.buttonPressedNumber}>0</button>
                <button className="flex-element" name="=" onClick={this.buttonPressedEqually}>=</button>
                <button className="flex-element" name="/" onClick={this.buttonPressedNumber}>/</button>
              </div>
            </div>
          </div>
        );
      }
    }
  export default App;
//ref