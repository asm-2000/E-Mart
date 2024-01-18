import React from "react";
import styles from "./Login.module.css";
import loginIcon from "../../Assets/login.png";

function Login() {
  return (
    <>
      <div className={styles.root_div}>
        <div className={styles.div_1}>
          <form className={styles.form_box}>
            <h2>Sign In To E-Mart</h2>
            <img src={loginIcon} alt="login Icon" />
            <input
              type="email"
              className={styles.input_box}
              placeholder="Enter Your E-mail."
            />
            <input
              type="password"
              className={styles.input_box}
              placeholder="Enter Your Password"
            />
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
