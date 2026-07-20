import React, { Component } from 'react';

// 1. Define the specific greetings for the two states
function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// 2. The Greeting component conditionally renders the appropriate message
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// 3. Define the Login button component (from hints)
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// 4. Define the Logout button component (from hints)
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// 5. Main Stateful Component to manage the conditional logic
class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    
    // Initialize the state as logged out (false)
    this.state = { isLoggedIn: false };
  }

  // Method to handle user login
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  // Method to handle user logout
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    // Element Variable definition
    let button;

    // Conditionally assign the correct button component to the variable
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
        
        {/* Render the conditional greeting */}
        <Greeting isLoggedIn={isLoggedIn} />
        
        {/* Render the conditionally assigned button element variable */}
        {button}
        
      </div>
    );
  }
}

export default App;