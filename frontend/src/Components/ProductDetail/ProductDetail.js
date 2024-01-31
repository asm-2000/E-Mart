import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import { useEffect, useState } from "react";

function ProductDetail() {
  const {productID} = useParams();
  const [productDetail, setproductDetail] = useState({});
  function AddtocartHandler() {}
  useEffect(() => {
    async function fetchDetails() {
      try {
        console.log(productID)
        const url = "http://localhost:8080/products/" + productID ;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
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
            Price: {productDetail.actual_price}
          </div>
          <div className={styles.productDescription}>
            <span style={{ color: "black", fontSize: "12pt" }}>
              Product Description:
            </span>{" "}
            <br />
            <br />
            {productDetail.about_product}
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
