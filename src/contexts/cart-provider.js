import { useReducer } from "react";

import CartContext from "./cart-context.context";

const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

const ADD = "ADD";
const REMOVE = "REMOVE";

function cartReducer(state, action) {
  switch (action.type) {
    case ADD: {
      const item = action.payload;

      let [itemIndex, updatedItem] = updateItemAmountById(
        [...state.items],
        item
      );

      let updatedItems;

      if (itemIndex === -1) {
        updatedItems = [...state.items, item];
      } else {
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }

      const updatedTotal = calculateCartTotal(updatedItems);

      return { items: updatedItems, totalAmount: updatedTotal };
    }

    case REMOVE: {
      const id = action.payload;

      let itemIndex = state.items.findIndex((item) => item.id === id);
      let item = state.items[itemIndex];
      let updatedItems;

      if (state.items[itemIndex].amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== id);
      } else {
        item = { ...item, amount: item.amount - 1 };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = item;
      }

      const updatedTotal = calculateCartTotal(updatedItems);

      return { items: updatedItems, totalAmount: updatedTotal };
    }
    default:
      return DEFAULT_STATE;
  }
}

function updateItemAmountById(items, item) {
  const { id, amount } = item;

  const existingCartItemIndex = items.findIndex((item) => item.id === id);

  if (existingCartItemIndex === -1) return [-1, null];

  const existingCartItem = items[existingCartItemIndex];
  const updatedCartItem = {
    ...existingCartItem,
    amount: existingCartItem.amount + amount,
  };
  return [existingCartItemIndex, updatedCartItem];
}

function calculateCartTotal(items) {
  if (items.length === 0) return 0;

  return items.reduce((acc, item) => acc + item.amount * item.price, 0);
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
