import React from 'react';
const Basket=(props)=>{
    return(<div>
        <p>Product Name: {props.name}</p>
        <p> Product Price: {props.price}</p>
        <p> Product Quantity: {props.Quant}</p>
        </div>);
}
export default Basket;