import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/productcategory/menClothing" className={styles.classLinks}>
        Men's Clothing
      </Link>
      <Link to="/productcategory/womenClothing" className={styles.classLinks}>
        Women's Clothing
      </Link>
      <Link to="/productcategory/footwear" className={styles.classLinks}>
        Footwear
      </Link>
      <Link to="/productcategory/babygarment" className={styles.classLinks}>
        Baby Garments
      </Link>
      <Link to="/productcategory/sportsItem" className={styles.classLinks}>
        Sport Items
      </Link>
      <Link to="/productcategory/accandornament" className={styles.classLinks}>
        Accessories and Ornaments
      </Link>
      <Link to="/productcategory/homeApp" className={styles.classLinks}>
        Home Appliances
      </Link>
      <Link to="/productcategory/babygarment" className={styles.classLinks}>
        Grocery Items
      </Link>
      <Link to="/productcategory/vehicleAcc" className={styles.classLinks}>
        Vehicle Accessories
      </Link>
    </div>
  );
}
export default Sidebar;
