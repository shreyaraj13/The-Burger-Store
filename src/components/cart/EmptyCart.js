import classes from "./EmptyCart.module.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
      <img src="/images/emptycart.png" alt="Empty Cart" />
      <h2>Your cart is empty</h2>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
