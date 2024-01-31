import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import demoImg from "../../Assets/shopping-bag.png";
import cartImg from "../../Assets/cart.png";

function ProductDetail() {
  const productId = useParams();
  function AddtocartHandler() {}
  console.log(productId)
  return (
    <div className={styles.div_root}>
      <div className={styles.div_1}>
        <img src={demoImg} alt="" className={styles.div_image} />

        <div className={styles.div_utility}>
          <div className={styles.title}>Dummy product</div>
          <div className={styles.price}>Price: Rs 1000</div>
          <div className={styles.productDescription}>
            <span style={{ color: "black", fontSize: "12pt" }}>
              Product Description:
            </span>{" "}
            <br />
            <br />
            The MacBook family was initially housed in designs similar to the
            iBook and PowerBook lines which preceded them, now making use of a
            unibody aluminum construction first introduced with the MacBook Air.
            This new construction also has a black plastic keyboard that was
            first used on the MacBook Air, which itself was inspired by the
            sunken keyboard of the original polycarbonate MacBooks. The now
            standardized keyboard brings congruity to the MacBook line, with
            black keys on a metallic aluminum body. The lids of the MacBook
            family are held closed by a magnet with no mechanical latch, a
            design element first introduced with the polycarbonate MacBook. The
            Memory, drives, and batteries were accessible in the old MacBook
            lineup, though the newest compact lineup solders or glues all such
            components in place. All of the current MacBooks feature backlit
            keyboards.
          </div>
          <button onClick={AddtocartHandler} className={styles.cartButton}>
            Add To Cart
          </button>
          <button  className={styles.buyButton}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
