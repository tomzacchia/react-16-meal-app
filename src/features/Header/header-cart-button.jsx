import { useContext, useEffect, useState } from "react";
import CartContext from "contexts/cart-context.context";

import CartIcon from "components/CartIcon";
import classes from "./header-cart-button.module.css";

function HeaderCartButton(props) {
  const [animateButton, setAnimateButton] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfItems = items.reduce((acc, item) => acc + item.amount, 0);

  const buttonClasses = `${classes.button} ${animateButton && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) return;

    setAnimateButton(true);

    const ANIMATION_DURATION_MS = 300;
    const timer = setTimeout(() => {
      setAnimateButton(false);
    }, ANIMATION_DURATION_MS);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
