import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import cartIcon from "../../Assets/cart.png";
import ecommerceIcon from "../../Assets/shopping-bag.png";
import searchIcon from "../../Assets/search.png";

function Navbar() {
  const [searchKey, setSearchKey] = useState("");
  const { isloggedin } = useAuth();
  function searchKeychangeHandler(event) {
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

        <form onSubmit={searchHandler} className={styles.search_form}>
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
        <Link to="/mycart" className={styles.cartIcon}>
          <img src={cartIcon} alt="cart icon" />
        </Link>
        <Link to="/myorders" className={styles.links}>
          My orders
        </Link>
        {!isloggedin && (
          <Link to="/login" className={styles.links}>
            Login
          </Link>
        )}
        {isloggedin && (
          <Link to="/login" className={styles.links}>
            Logout
          </Link>
        )}
        <Link to="/signup" className={styles.links}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
