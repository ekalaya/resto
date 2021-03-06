import React from 'react';

import classes from './Food.css';
import FoodIngredient from './FoodIngredient/FoodIngredient';

const food = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <FoodIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Food}>
            <FoodIngredient type="bread-top" />
            {transformedIngredients}
            <FoodIngredient type="bread-bottom" />
        </div>
    );
};

export default food;