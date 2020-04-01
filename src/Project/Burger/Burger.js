import React from 'react';
import BuildIngredient from './BurgerIngredient';
import classes from './Burger.module.css'
const burger=(props)=>{
    let transformedIngredients = Object.keys(props.ingredients)
                                    .map(igkey=>{return [...Array(props.ingredients[igkey])]
                                    .map((_,i)=>{return <BuildIngredient key={igkey+i} type={igkey}/>})})
                                    .reduce((arr,el)=>{return arr.concat(el)},[]);
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please add the ingredients</p>;
    }
    return(
        <div className={classes.Burger}>
            <BuildIngredient type="burgerTop"/>
            {transformedIngredients}
            <BuildIngredient type="burgerBottom"/>
        </div>

    );
}
export default burger;