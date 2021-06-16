import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/home/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CartContext from "./cart-context";
function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    //we need to stringfy because we can store only strings in local storage
  }, [cart]);
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
    //storing in local state (setCart) after fetching from local storage
    //this local state is sinked in our whole application using context
    // i.e. data from ProductCart is sent up to context api
  }, []);

  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Products" component={Products}></Route>
          <Route path="/Cart" component={Cart}></Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
