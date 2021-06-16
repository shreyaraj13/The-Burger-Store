import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { useContext } from "react";
import CartContext from "../../cart-context";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  const itemQuantity = () => {
    if (!cart.totalItems) {
      return 0;
    } else {
      return cart.totalItems;
    }
  };
  return (
    <nav className={classes.navbar}>
      <Link to="/" className={classes.innerlink}>
        <img src="/images/logo.ico" alt="logo" />
        <h3>BURGER</h3>
      </Link>
      <div className={classes.navbarlinks}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className={classes.cart}>
          <button className={classes.innerlink}>
            <h3>{itemQuantity()}</h3>
            <img src="/images/cart.ico" alt="cart" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
