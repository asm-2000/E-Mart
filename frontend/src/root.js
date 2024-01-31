import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import styles from "./root.module.css";

function Root() {
  return (
    <div className={styles.root}>
      <Navbar></Navbar>
      <div className={styles.page}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Root;
