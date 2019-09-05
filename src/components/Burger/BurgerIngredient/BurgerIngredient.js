import React from "react";
import PropTypes from "prop-types";

import styles from "./BurgerIngredient.module.css";

export const ingredients = {
  BREAD: {
    TOP: "bread-top",
    BOTTOM: "bread-bottom"
  },
  MEAT: "meat",
  CHEESE: "cheese",
  SALAD: "salad",
  BACON: "bacon"
};

class BurgerIngredient extends React.Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ingredients.BREAD.BOTTOM:
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case ingredients.BREAD.TOP:
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case ingredients.MEAT:
        ingredient = <div className={styles.Meat}></div>;
        break;
      case ingredients.CHEESE:
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case ingredients.SALAD:
        ingredient = <div className={styles.Salad}></div>;
        break;
      case ingredients.BACON:
        ingredient = <div className={styles.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return <React.Fragment>{ingredient}</React.Fragment>;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
