import React from 'react';
import './AddProduct.css';
const AddProduct=(props)=>{
    const adding=()=>{

            let x=document.getElementById("i01").value;
            let y=document.getElementById("n01").value;
            props.click(x,y);
    }
    return(
        <div className="addproduct">
            <input type="text" id="i01"/><br/>
            <input type="number" id="n01"/><br/>
            <button onClick={adding}>Add Product</button>
        </div>
    );
}
export default AddProduct;