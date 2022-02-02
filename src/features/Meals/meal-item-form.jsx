import Input from "components/Input";
import { useRef, useState } from "react";
import classes from "./meal-item-form.module.css";

function MealItemForm(props) {
  const inputAmountRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = parseInt(inputAmountRef.current.value);

    const isInputInvalid =
      enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5;

    if (isInputInvalid) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}

export default MealItemForm;
