import { Fragment, useState } from "react";
import Header from "features/Header";
import Meals from "features/Meals";
import Cart from "features/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart((prevState) => !prevState);
  }

  return (
    <Fragment>
      {showCart && <Cart onHideCart={toggleShowCart} />}

      <Header onShowCart={toggleShowCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
