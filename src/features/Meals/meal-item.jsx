import { useContext } from "react";
import MealItemForm from "./meal-item-form";
import classes from "./meal-item.module.css";
import CartContext from "contexts/cart-context.context";

function MealItem(props) {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  function addToCart(amount) {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3> {props.name} </h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCart} />
      </div>
    </li>
  );
}

export default MealItem;
