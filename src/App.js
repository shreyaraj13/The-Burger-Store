import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/home/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Products" component={Products}></Route>
          <Route path="/Cart" component={Cart}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
