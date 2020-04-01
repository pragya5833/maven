
import React,{Component} from 'react';
import Burger from './Burger/Burger';
import BuildControls from './BuilControl/BuildControls';
const INGREDIENT_PRICES = { salad: 20, cheese: 10, bacon: 10 };
class BurgerBuilder extends Component{
    state={ingredients:{salad:0,cheese:0,bacon:0},totalPrice:4,purchasable:false};

    updatePurchasable(ingredients){
        let sum=Object.keys(ingredients).map(igkey=>{return ingredients[igkey]})
        .reduce((sum,el)=>{return sum+el;},0);
        this.setState({purchasable:sum<0});
    }
    addHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;

        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+INGREDIENT_PRICES[type];
       const updatedIngredients={...this.state.ingredients};
       updatedIngredients[type]=newCount;
       this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
        this.updatePurchasable(updatedIngredients);
    }

    removeHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){return;}
        const newCount = oldCount - 1;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchasable(updatedIngredients);
    }
    render(){
        let disableInfo={...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]>=0;
        }
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls added={this.addHandler} removed={this.removeHandler}
                price={this.state.totalPrice}disabled={this.state.purchasable}/>
            </div>
        );
    }
}
export default BurgerBuilder;