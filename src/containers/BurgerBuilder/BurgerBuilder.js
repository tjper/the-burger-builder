import React from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0.0,
    purchaseable: false,
    purchasing: false
  };

  purchaseCancelHandler = () => this.setState({ purchasing: false });
  purchaseHandler = () => this.setState({ purchasing: true });

  updatePurchaseState = ingredients => {
    const ingredientCnt = Object.keys(ingredients)
      .map(ingredient => ingredients[ingredient])
      .reduce((sum, cnt) => sum + cnt, 0);
    this.setState({ purchaseable: ingredientCnt > 0 });
  };

  purchaseContinueHandler = () => {
    alert("You continue!");
  };

  addIngredientHandler = ingredient => {
    // calculate ingredient counts
    const newIngredients = { ...this.state.ingredients };
    newIngredients[ingredient] = this.state.ingredients[ingredient] + 1;

    // calculate total price
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[ingredient];
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    this.updatePurchaseState(newIngredients);
  };

  removeIngredientHandler = ingredient => {
    // calculate ingredient counts
    const newIngredients = { ...this.state.ingredients };
    const newCnt = this.state.ingredients[ingredient] - 1;
    if (newCnt < 0) {
      return;
    }
    newIngredients[ingredient] = newCnt;
    this.setState({ ingredients: newIngredients });

    // calculate total price
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredient];
    this.setState({ totalPrice: newPrice });
    this.updatePurchaseState(newIngredients);
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          closeModal={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          price={this.state.totalPrice}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
