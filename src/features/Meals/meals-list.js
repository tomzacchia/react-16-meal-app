import { useEffect, useState } from "react";
import Card from "components/Card";
import MealItem from "./meal-item";
import classes from "./meals-list.module.css";
import { getMeals } from "utils/http-utilities";

function MealsList(props) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMeals()
      .then((meals) => {
        setIsLoading(false);
        setMeals(meals);
        // TODO: error handling
      })
      .catch((error) => {
        setMeals([]);
        console.log(error);
      });
  }, []);

  const mealsListJSX = meals.map((meal, index) => (
    <MealItem
      key={index}
      id={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>{isLoading ? <p>is loading....</p> : <ul>{mealsListJSX}</ul>}</Card>
    </section>
  );
}

export default MealsList;
