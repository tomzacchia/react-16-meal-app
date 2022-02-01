import { Fragment } from "react";
import Header from "features/Header";
import Meals from "features/Meals";
import Cart from "features/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
