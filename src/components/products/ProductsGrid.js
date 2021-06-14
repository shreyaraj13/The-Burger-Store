import ProductCard from "./ProductCard";
import classes from "./ProductsGrid.module.css";
const ProductsGrid = () => {
  return (
    <div className={classes.gridContainer}>
      <ProductCard />
    </div>
  );
};

export default ProductsGrid;
