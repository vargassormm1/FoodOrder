import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContext";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
};

export default CartButton;
