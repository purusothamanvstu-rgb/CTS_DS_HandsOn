import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  // Updates state when user types in the input fields
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Handles the form submission Synthetic Event
  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    
    // Calculates the conversion (80 * 80 = 6400 as shown in the screenshot)
    const convertedAmount = parseFloat(this.state.amount) * 80; 
    alert(`Converting to Euro Amount is ${convertedAmount}`);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
            <input 
              type="text" 
              name="amount" 
              value={this.state.amount} 
              onChange={this.handleInputChange} 
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'inline-block', width: '80px' }}>Currency:</label>
            <input 
              type="text" 
              name="currency" 
              value={this.state.currency} 
              onChange={this.handleInputChange} 
            />
          </div>
          
          <button type="submit" style={{ marginLeft: '80px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;