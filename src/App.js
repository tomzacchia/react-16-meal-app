import { useState } from "react";
import Header from "features/Header";
import Meals from "features/Meals";
import Cart from "features/Cart";
import CartProvider from "contexts/cart-provider";

function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart((prevState) => !prevState);
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={toggleShowCart} />}

      <Header onShowCart={toggleShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
