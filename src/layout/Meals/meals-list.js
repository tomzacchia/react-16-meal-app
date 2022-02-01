import Card from "components/Card";
import classes from "./meals-list.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MealsList(props) {
  const mealsListJSX = DUMMY_MEALS.map((meal, index) => (
    <li key={index}>{meal.name}</li>
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
