import React from "react";

import mealsImage from "assets/meals.jpeg";
import styles from "./header.module.css";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of meals!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
