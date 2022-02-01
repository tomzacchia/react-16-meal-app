import { Fragment } from "react";
import Header from "features/Header";
import Meals from "features/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
