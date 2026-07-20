import React from 'react';

function App() {
  // 1. Create an element to display the heading
  const element = "Office Space";

  // 2. Create an object of office to display the details
  const ItemName = { 
    Name: "DBS", 
    Rent: 50000, 
    Address: 'Chennai' 
  };

  // 3. Conditional Logic: Display color based on Rent amount
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('red'); 
  } else {
    colors.push('green');
  }

  // 4. Attribute to display the image of the office space
  // Using a standard placeholder image to match the layout
  const jsxatt = <img 
    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" 
    width="25%" 
    height="25%" 
    alt="Office Space" 
  />;

  // 5. Render the JSX to the DOM
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      
      <h1>{element} , at Affordable Range</h1>
      
      {jsxatt}
      
      <h1>Name: {ItemName.Name}</h1>
      
      {/* Applying the inline CSS color dynamically from our array */}
      <h3 style={{ color: colors[0] }}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      
      <h3>Address: {ItemName.Address}</h3>

    </div>
  );
}

export default App;