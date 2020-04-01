import React from 'react';

const AddProduct=(props)=>{
    const adding=()=>{
        let x=document.getElementById("name").value;
        let y = document.getElementById("price").value;
        props.click(x,y);
    }
    return(<div>
       Product Name: <input type="text" id="name"/><br/>
       Product Price: <input type="number" id="price"/><br/>
       <button onClick={adding}>Add Product</button>
    </div>);
}
export default AddProduct;