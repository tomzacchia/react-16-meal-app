import MealsSummary from "./meals-summary";
import MealsList from "./meals-list";
import { Fragment } from "react";

function Meals(props) {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList />
    </Fragment>
  );
}

export default Meals;
