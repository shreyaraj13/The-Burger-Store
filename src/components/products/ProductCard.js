import classes from "./ProductCard.module.css";
import { productData } from "../../data";
import { useContext } from "react";
import CartContext from "../../cart-context";

const ProductCard = () => {
  const { cart, setCart } = useContext(CartContext);

  const addProductHandler = (event, data) => {
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[data.id]) {
      _cart.items[data.id] += 1;
    } else {
      _cart.items[data.id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);
    event.target.innerHTML = "Added";
    setTimeout(() => {
      event.target.innerHTML = "Add";
    }, 300);
  };
  return (
    <div className={classes.card}>
      <h1>Products</h1>
      {productData.map((data, id) => {
        return (
          <div key={id}>
            <img src={data.imageUrl} alt="burger" />
            <div className={classes.cardElement}>
              <h3>{data.name}</h3>
              <button
                onClick={(event) => {
                  addProductHandler(event, data);
                }}
              >
                Add
              </button>
            </div>
            <p>₹{data.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
