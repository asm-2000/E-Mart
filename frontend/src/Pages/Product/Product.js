import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });
  const { productCategory } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "http://localhost:8080/products/productcategories/" + productCategory
        );
        if (response.ok) {
          const productlst = await response.json();
          console.log(productlst);
          setProducts([...productlst]);
        } else {
          const err = new Error({
            status: true,
            message: "Failed to fetch products",
          });
          setError(err);
        }
      } catch {
        const err = new Error({
          status: true,
          message: "Failed to fetch products",
        });
        setError(err);
      }
    }
    fetchProducts();
  }, [productCategory]);
  return (
    <>
      {error.status && (
        <div className={styles.root_div}>
          <h2>Failed to retrieve products..</h2>
        </div>
      )}
      {!error.status && (
        <div className={styles.root_div}>
          <h2>Explore products..</h2>
          <div className={styles.productgrid}>
            {products.map((product)=>(<Card props = {product}></Card>))}
          </div>
        </div>
      )}
    </>
  );
}
export default Product;
