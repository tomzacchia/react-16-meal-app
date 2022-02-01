import { Fragment } from "react";
import Header from "layout/Header";
import Meals from "layout/Meals";

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
