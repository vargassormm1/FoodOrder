import { Fragment } from "react";

import foodImage from "../../Assests/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Big Meal Feast" />
      </div>
    </Fragment>
  );
};

export default Header;
