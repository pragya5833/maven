import React from 'react';

const AddToBasket=(props)=>{
    return(<div>
        <p>Product Name: {props.prodName}</p>
        <p>Product Price: {props.prodPrice}</p>
        <p> Quantity: {props.Quantity}</p>
        <button onClick={props.adding}>Add To Basket</button>
    </div>);
}
export default AddToBasket;