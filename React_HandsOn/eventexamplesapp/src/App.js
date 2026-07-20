import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5 // Starting at 5 based on the screenshot
    };
  }

  // Method 1: Increment value AND invoke a static message alert
  handleIncrement = () => {
    this.setState(prevState => ({ count: Math.min(prevState.count + 1) }));
    alert("Hello! Member1");
  }

  // Method 2: Decrement value
  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  // Method 3: Accepts an argument
  sayWelcome = (message) => {
    alert(message);
  }

  // Method 4: Handles a generic synthetic click event
  handleSyntheticEvent = (event) => {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{this.state.count}</p>
        
        <div style={{ marginBottom: '5px' }}>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
        
        <div style={{ marginBottom: '5px' }}>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        
        <div style={{ marginBottom: '5px' }}>
          {/* Passing the "welcome" argument using an inline arrow function */}
          <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <button onClick={this.handleSyntheticEvent}>Click on me</button>
        </div>
        
        <CurrencyConvertor />
        
      </div>
    );
  }
}

export default App;