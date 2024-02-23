import styles from "./CartDetail.module.css";
import { UseDispatch, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartStore";
import { Link } from "react-router-dom";

function CartDetail(props) {
  const cartDetail = props.detail;
  const dispatch = useDispatch();
  console.log(cartDetail.prodId);
  function cartRmvHandler()
  {
    dispatch(cartActions.removeFromCart(cartDetail.prodId));
  }
  let price = parseInt(cartDetail.prodPrice.substring(1).replace(/,/g,""));
  return (
    <div className={styles.div_root}>
      <div className={styles.div_1}>
        <div className={styles.div_70}>
          <div className={styles.div_title}>{cartDetail.prodName}</div>

          <img src={cartDetail.prodImg} alt="" className={styles.div_image} />

          <span>{cartDetail.prodId}</span>
        </div>
        <div className={styles.div_30}>
          
          <span>
            Price:{' '}
            {cartDetail.prodQuantity} X {cartDetail.prodPrice.substring(1)} = Rs{' '}
            {cartDetail.prodQuantity *
              price}
          </span>
          <span>
            <button className={styles.rmbutton} onClick={cartRmvHandler}>Remove From Cart</button>
          </span>
        </div>
      </div>
    </div>
  );
}
export default CartDetail;
