import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import cartIcon from "../../Assets/shopping-cart .png";
import ecommerceIcon from "../../Assets/shopping-bag.png";
import searchIcon from "../../Assets/search.png";

function Navbar() {
  const [searchKey, setSearchKey] = useState("");

  function searchKeychangeHandler(event)
  {
    event.preventDefault();
    setSearchKey(event.target.value);
  }
  function searchHandler(event) {
    event.preventdefault();
    setSearchKey(event.target.value);
  }

  return (
    <div className={styles.root_div}>
      <div className={styles.div_1}>
        <Link to="/">
          <img src={ecommerceIcon} alt="Ecommerce icon" />
        </Link>

        <form
          onSubmit={searchHandler}
          className={styles.search_form}
        >
          <input
            type="text"
            placeholder="Search for products.."
            value={searchKey}
            onChange={searchKeychangeHandler}
            className={styles.searchBar}
          />
          <button type="submit" className={styles.searchButton}>
            <img src={searchIcon} alt="" />
          </button>
        </form>
      </div>
      <div className={styles.div_2}>
        <Link
          to="/mycart"
          className={styles.cart}
          style={{ padding: "6px 6px" }}
        >
          <img src={cartIcon} alt="cart icon" />
        </Link>
        <Link to="/login" className={styles.links}>
          Login
        </Link>
        <Link to="/signup" className={styles.links}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
