import { useEffect, useState } from "react";
import Card from "components/Card";
import MealItem from "./meal-item";
import classes from "./meals-list.module.css";
import { get } from "firebase/database";
import { dbMealsRef } from "utils/firebase";

function MealsList(props) {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    try {
      const snapshot = await get(dbMealsRef);
      const mealsCollection = snapshot.val();

      const meals = Object.entries(mealsCollection).map(([id, data]) => ({
        id: id,
        ...data,
      }));
      setMeals(meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMeals();
  });

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
      <Card>
        <ul>{mealsListJSX}</ul>
      </Card>
    </section>
  );
}

export default MealsList;
