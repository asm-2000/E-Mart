import styles from "./Card.module.css";
import { Link } from "react-router-dom";


function Card(props) {
  const product = props.props;
  const id = product._id;
  return (
    <Link to={"/products/" + id} className={styles.link}>
      <div className={styles.card}>
        <img src={product.img_link} alt="product image" className={styles.image}/>
        <div className={styles.title}>{product.product_name}</div>
        <div className={styles.price}>{product.actual_price}</div>
      </div>
    </Link>
  );
}
export default Card;
