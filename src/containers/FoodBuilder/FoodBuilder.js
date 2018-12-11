import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Food from '../../components/Food/Food';

class FoodBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <Aux>
                <Food ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default FoodBuilder;