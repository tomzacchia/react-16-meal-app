import { useContext } from "react";
import CartContext from "contexts/cart-context.context";

import CartIcon from "components/CartIcon";
import classes from "./header-cart-button.module.css";

function HeaderCartButton(props) {
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
