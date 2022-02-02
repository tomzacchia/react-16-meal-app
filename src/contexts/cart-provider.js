const { default: CartContext } = require("./cart-context");

function CartProvider(props) {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  function addItemToCartHandler(item) {}

  function removeItemToCartHandler(id) {}

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
