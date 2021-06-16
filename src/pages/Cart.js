import EmptyCart from "../components/cart/EmptyCart";
import CartItems from "../components/cart/CartItems";
import CartContext from "../cart-context";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  if (cart.totalItems > 0) {
    return (
      <div>
        <CartItems />
      </div>
    );
  } else {
    return (
      <div>
        <EmptyCart />
      </div>
    );
  }
};

export default Cart;
