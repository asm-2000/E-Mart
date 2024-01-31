import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Sidebar from "../../Components/SIdebar/Sidebar";
import Card from "../../Components/Card/Card";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("notfetched");
  const [errorMsg, setErrMsg] = useState("");

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      const productData = [...data];
      setProducts(productData);
      setStatus("fetched");
    } catch {
      const err = new Error("Unable to fetch data.");
      setStatus("notfetched");
      setErrMsg(err.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.root_div}>
      <Sidebar></Sidebar>
      <div className={styles.products}>
        <h2>Recommended For You..</h2>
        <div className={styles.productgrid}>
          {" "}
          {products.map((product) => (
            <Card props={product}></Card>
          ))}
        </div>

      </div>
    </div>
  );
}
export default Homepage;
