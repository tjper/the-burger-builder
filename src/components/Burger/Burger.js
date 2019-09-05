import React from "react";
import BurgerIngredient, {
  ingredients
} from "./BurgerIngredient/BurgerIngredient";

import styles from "./Burger.module.css";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={ingredients.BREAD.TOP} />
      {transformedIngredients}
      <BurgerIngredient type={ingredients.BREAD.BOTTOM} />
    </div>
  );
};

export default burger;
