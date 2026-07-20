import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <table border="1" style={{ margin: '0 auto', borderCollapse: 'collapse', color: 'seagreen', width: '300px' }}>
                <thead>
                    <tr>
                        <th style={{ padding: '5px' }}>Name</th>
                        <th style={{ padding: '5px' }}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through the passed 'item' array using map() */}
                    {this.props.item.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ padding: '5px' }}>{item.itemname}</td>
                                <td style={{ padding: '5px' }}>{item.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Cart;