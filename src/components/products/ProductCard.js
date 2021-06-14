import classes from "./ProductCard.module.css";
import { productData } from "../../data";
const ProductCard = () => {
  return (
    <div className={classes.card}>
      {productData.map((data, id) => {
        return (
          <div key={id}>
            <img src={data.imageUrl} alt="burger" />
            <div className={classes.cardElement}>
              <h3>{data.name}</h3>
              <button>Add</button>
            </div>
            <p>{data.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
