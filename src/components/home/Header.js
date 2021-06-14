import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <div className={classes.text}>
        <p>Hungry?</p>
        <h1>Grab your meal!</h1>
        <Link to="/products">
          <button>Order Now</button>
        </Link>
      </div>
      <img src="/images/heroburgerimage.png" alt="heroimg" />
    </header>
  );
};

export default Header;
