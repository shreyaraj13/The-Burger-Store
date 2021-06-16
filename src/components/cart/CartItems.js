import classes from "./CartItems.module.css";
import { useContext } from "react";
import CartContext from "../../cart-context";
import { productData } from "../../data";

const CartItems = () => {
  let total = 0;
  const { cart, setCart } = useContext(CartContext);

  const quantity = (data) => {
    if (!cart.items) {
      return 0;
    } else if (!cart.items[data.id]) {
      cart.items[data.id] = 0;
      return 0;
    }
    return cart.items[data.id];
  };

  const increment = (data) => {
    const existingQuantity = cart.items[data.id];
    const _cart = { ...cart };
    _cart.items[data.id] = existingQuantity + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (data) => {
    const existingQuantity = cart.items[data.id];
    if (existingQuantity <= 0) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[data.id] = existingQuantity - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (data) => {
    const sum = data.price * cart.items[data.id];
    total += sum;
    return sum;
  };

  const deleteItem = (data) => {
    const _cart = { ...cart };
    _cart.totalItems -= _cart.items[data.id];
    _cart.items[data.id] = 0;
    setCart(_cart);
  };

  const ordered = () => {
    alert("order placed");
    const _cart = { ...cart };
    _cart.totalItems = 0;
    _cart.items = 0;
    setCart(_cart);
  };

  return (
    <div className={classes.cartpage}>
      <h1>Cart Items</h1>
      {productData.map((data, key) => {
        if (cart.items[data.id] >= 1) {
          return (
            <div key={data.id} className={classes.cartproduct}>
              <img src={data.imageUrl} alt="burger" />
              <h3>{data.name}</h3>
              <button
                onClick={() => {
                  decrement(data);
                }}
                className={classes.addsub}
              >
                -
              </button>
              <p>{quantity(data)}</p>
              <button
                onClick={() => {
                  increment(data);
                }}
                className={classes.addsub}
              >
                +
              </button>

              <p>₹{getSum(data)}</p>
              <button
                onClick={() => {
                  deleteItem(data);
                }}
                className={classes.delete}
              >
                Delete
              </button>
            </div>
          );
        }
        return "";
      })}

      <p>Grand Total: ₹{total}</p>
      <button onClick={ordered} className={classes.order}>
        Order Now
      </button>
    </div>
  );
};

export default CartItems;
