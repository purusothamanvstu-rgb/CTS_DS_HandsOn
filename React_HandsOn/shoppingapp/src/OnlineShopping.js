import React, { Component } from 'react';
import Cart from './Cart';

export class OnlineShopping extends Component {
    render() {
        // Create an array of Cart and initialize 5 items
        const CartInfo = [
            { itemname: "Laptop", price: 80000 },
            { itemname: "TV", price: 120000 },
            { itemname: "Washing Machine", price: 50000 },
            { itemname: "Mobile", price: 30000 },
            { itemname: "Fridge", price: 70000 }
        ];

        return (
            <div className="mydiv" style={{ textAlign: 'center', color: 'green', fontFamily: 'sans-serif', marginTop: '50px' }}>
                <h1>Items Ordered :</h1>
                
                {/* Render the Cart component and pass the CartInfo array as a prop named 'item' */}
                <Cart item={CartInfo} />
            </div>
        );
    }
}

export default OnlineShopping;