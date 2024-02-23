import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {cartActions} from "../../Store/cartStore";
import {orderActions} from "../../Store/orderStore";

function ProductDetail() {
  const { productID } = useParams();
  const [productDetail, setproductDetail] = useState({});
  const [prodQuantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function AddtocartHandler() {
    const prodDetail = {
      prodID: productDetail._id,
      prodName: productDetail.product_name,
      prodQuantity: prodQuantity,
      prodPrice: productDetail.actual_price,
      prodImg: productDetail.img_link,
    };
    dispatch(cartActions.addtoCart(prodDetail));
  }
  function incrementHandler() {
    setQuantity(prodQuantity + 1);
  }
  function decrementHandler() {
    if (prodQuantity > 1) {
      setQuantity(prodQuantity - 1);
    }
  }
  useEffect(() => {
    async function fetchDetails() {
      try {
        const url = "http://localhost:8080/products/" + productID;
        const response = await fetch(url);
        const data = await response.json();
        setproductDetail(...data);
        
      } catch {
        const err = new Error("Failed to fetch product datails");
      }
    }
    fetchDetails();
  }, []);
  return (
    <div className={styles.div_root}>
      <div className={styles.div_1}>
        <img
          src={productDetail.img_link}
          alt="Product"
          className={styles.div_image}
        />

        <div className={styles.div_utility}>
          <div className={styles.title}>{productDetail.product_name}</div>
          <div className={styles.price}>
            Price: Rs {productDetail.actual_price}
            
          </div>
          <div className={styles.productDescription}>
            <span style={{ color: "black", fontSize: "12pt" }}>
              Product Description:
            </span>{" "}
            <br />
            <br />
            {productDetail.about_product}
          </div>
          <div
            className={styles.productDescription}
            style={{ display: "flex", gap:"1em"}}
          >
            <span style={{ color: "black", fontSize: "12pt" }}>Quantity: </span>
            <span>
              <button onClick={decrementHandler} className={styles.incdecbutton}> - </button>
              <button onClick={incrementHandler} className={styles.incdecbutton}> + </button>
            </span>
            <span> {prodQuantity}</span>
          </div>
          <button onClick={AddtocartHandler} className={styles.cartButton}>
            Add To Cart
          </button>
          <button className={styles.buyButton}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
