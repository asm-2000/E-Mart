import React from "react";
import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import loginIcon from "../../Assets/login.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setFormValidity] = useState(false);
  const { isloggedin, loginHandler } = useAuth();
  const navigate = useNavigate();
  // Checking form validity

  useEffect(() => {
    const timeOut = setTimeout(() => {
      // Setting timeout after every keystroke to minimize the
      if (
        // number of checks to be done (minimizes the number of requests)
        email.trim().includes("@") &&
        email.trim().length > 12 &&
        password.trim().length > 6
      )
        setFormValidity(true);
      else setFormValidity(false);
    }, 200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [email, password]);

  //Function to handle Email change

  function EmailchangeHandler(event) {
    setEmail(event.target.value);
  }
  //Function to handle Password change

  function PasswordchangeHandler(event) {
    setPassword(event.target.value);
  }

  //Function to handle form submit

  function onSubmitHandler(event) {
    event.preventDefault();

    //First Checking the forms validity

    if (isValid) {
      const loginInfo = {
        email: email,
        password: password,
      };
      console.log(loginInfo);
      setEmail("");
      setPassword("");
      loginHandler(loginInfo);
    } else console.log("the email or password is not valid");
  }
  if (isloggedin === true) {
    navigate("/");
  }
  return (
    <>
      <div className={styles.root_div}>
        <div className={styles.div_1}>
          <h2>Sign In To E-Mart</h2>
          <img src={loginIcon} alt="login Icon" />
          <form className={styles.form_box} onSubmit={onSubmitHandler}>
            <label htmlFor="email" className={styles.input_label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className={styles.input_box}
              value={email}
              onChange={EmailchangeHandler}
              placeholder="Enter Your E-mail."
            />
            <label htmlFor="password" className={styles.input_label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.input_box}
              value={password}
              onChange={PasswordchangeHandler}
              placeholder="Enter Your Password"
            />
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
          <Link to="/signup" className={styles.link}>
            Do not have an account? Sign up!
          </Link>
        </div>
      </div>
    </>
  );
}
export default Login;
