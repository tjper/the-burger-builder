import React from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      ingredient => (
        <li>
          <span style={{ textTransform: "capitalize" }}>{ingredient}</span>:{" "}
          {this.props.ingredients[ingredient]}
        </li>
      )
    );

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button type="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button type="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
