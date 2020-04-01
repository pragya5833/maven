import React from 'react';
import { tsOptionalType } from '@babel/types';
const AddToBasket=(props)=>{

    const total=()=>{
        const production=[...props.items];
        let sum=0;
        for(let i=0;i<production.length;i++){
            let z=document.getElementById("n02").value;
            sum=sum+(z*production[i].productPrice);
        }


    }


    return(<div className="basket">
        <p>Product Name:{props.name}</p>
        <p>Product Price:{props.price}</p>
        <p>Quantity:<input type="number" id="n02" value={props.count} /></p>

    </div>);
}
export default AddToBasket;