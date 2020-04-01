import React,{Component} from 'react';
import AddProduct from './AddProduct';
import AddToBasket from './AddToBasket';
import Basket from './Basket';
import classes from './Products.module.css';
class Products extends Component{
    state={products:[]};
    addHandler=(name,price)=>{
        const products=[...this.state.products];
        products.push({productName:name,productPrice:price,show:false,Quantity:0});
        this.setState({products:products});
    }
    basketHandler=(ind)=>{
        const product={...this.state.products[ind]};
        product.show=true;
        product.Quantity++;
        const products = [...this.state.products];
        products[ind]=product;
        this.setState({products:products});
    }
    totalHandler=()=>{
        const products=[...this.state.products];
        let sum=0;
        for(let i=0;i<products.length;i++){
            if(products[i].show){
                sum=sum+(products[i].productPrice*products[i].Quantity);
            }
        }
        return sum;
    }

    render(){
        let show = <div>{this.state.products.map(
            (b, index) => {
                return (<AddToBasket prodName={b.productName} prodPrice={b.productPrice}
                    Quantity={b.Quantity} adding={()=>this.basketHandler(index)} />)
            }
        )}</div>


        let basket=<div >{this.state.products.map(
            (p,index)=>{
                if(p.show){
                    return(
                        <Basket name={p.productName} price={p.productPrice} Quant={p.Quantity}/>
                    )
                }
            }
        )}</div>
        return (<div className={classes.products}>
            <AddProduct click={this.addHandler}/>
            {show}
            <h>Products in Basket</h>
            {basket}
            <p>Total:</p>
            <input type="number" id="total" value={this.totalHandler()} readOnly/>
        </div>);
    }
}
export default Products;