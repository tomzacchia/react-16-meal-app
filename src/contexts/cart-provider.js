import { useReducer } from "react";

import CartContext from "./cart-context.context";

/*
  NOTE: we can manage context value inside of <App /> however if there were other
  contexts at App root level we would quickly bloat the function body of <App />.
  As such we will manage the state of the Cart context within a higher-order
  component
*/

const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

const ADD = "ADD";
const REMOVE = "REMOVE";

function cartReducer(state, action) {
  switch (action.type) {
    case ADD:
      const { item } = action.payload;
      const updatedItems = state.items.concat(item);
      const totalAmount = updatedItems.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
      return { items: updatedItems, totalAmount: totalAmount };

    case REMOVE:
      return state;
    default:
      return DEFAULT_STATE;
  }
}

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, DEFAULT_STATE);

  function addItemToCartHandler(item) {
    dispatchCart({ type: ADD, payload: item });
  }

  function removeItemFromCartHandler(id) {
    dispatchCart({ type: REMOVE, payload: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
