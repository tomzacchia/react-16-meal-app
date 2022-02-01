import classes from "./input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* NOTE: We spread object key-value pairs to add it as attributes on input */}
      <input {...props.input} />
    </div>
  );
}

export default Input;
