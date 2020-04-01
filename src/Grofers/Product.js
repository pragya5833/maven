import React,{Component} from 'react';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
import AddToBasket from './AddToBasket';
import './Product.css';
class Product extends Component{
    state={products:[]}
    addHandler=(prodName,prodPrice)=>{
        const products=[...this.state.products];
        products.push({productName:prodName,productPrice:prodPrice,showState:false,Quantity:0});
        this.setState({products:products});
    }
    changeHandler=(ind)=>{
        const product={...this.state.products[ind]};
            product.showState = true;
            product.Quantity++;
            const products = [...this.state.products];
            products[ind] = product;
            this.setState({ products: products });
    }
    sumHandler=()=>{
        let sum=0;
        const products=[...this.state.products];

        for(let i=0;i<products.length;i++)
        {
            if(products[i].showState)
            {
                sum = sum + parseInt((products[i].productPrice)) * products[i].Quantity;
            }

        }
        return sum;
    }
    removeHandler=(ind)=>{
        const product={...this.state.products[ind]};
        product.Quantity--;
        if(product.Quantity==0){
            product.showState=false;
        }
        const products=[...this.state.products];
        products[ind]=product;
        this.setState({products:products});
    }
    render(){
        let show=<div>{this.state.products.map((s,index)=>{return(
            <ShowProduct name={s.productName} price={s.productPrice}
            change={()=>this.changeHandler(index)} count={s.Quantity} remove={()=>this.removeHandler(index)}/>)})}</div>
        let basket=<div>{this.state.products.map((p,index)=>{
            if(p.showState)
            {
                return(<AddToBasket name={p.productName} price={p.productPrice} show={p.showState} count={p.Quantity}/>)
            }}
            )}</div>
        return(<div className="product">
            <AddProduct click={this.addHandler}/>
            {show}
            <h4>Added Products</h4>
            {basket}

            <span>Payment:</span><input type="text" id="i02" value={this.sumHandler()} readOnly />
        </div>);
    }
}
export default Product;





















































































































































































































































































































































