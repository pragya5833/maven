import React from 'react';
import './ShowProduct.css';
const ShowProduct = (props) => {
    return (<div className="show">
        <p>Product Name:{props.name}</p>
        <p>Product Price:{props.price}</p>
        <p>Quantity:{props.count}</p>
        <button onClick={props.change}>Add To Basket</button>
        <button onClick={props.remove}>Remove from basket</button>
    </div>);
}
export default ShowProduct;