import React from 'react';
import classes from '../../Project/Burger/BurgerIngredient.module.css'
const burgerIngredient=(props)=>{
    let ingredient=null;
    switch(props.type){
        case('burgerBottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case('burgerTop'):
            ingredient = (<div className={classes.BreadTop}>
                <div className={classes.Seeds}></div>
            </div>);
            break;
        
    }
    return ingredient;
}
export default burgerIngredient;