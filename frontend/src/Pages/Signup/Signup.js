import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import registerIcon from "../../Assets/register.png";
import useAuth from "../../Hooks/useAuth";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] =useState("");
    const [dob, setDob ] = useState("");
    const {signupHandler} = useAuth();

    function nameChangeHandler(event)
    {
        setName(event.target.value);
    }
    function emailChangeHandler(event)
    {
        setEmail(event.target.value);
    }
    function passwordChangeHandler(event)
    {
        setPassword(event.target.value);
    }
    function contactChangeHandler(event)
    {
        setContact(event.target.value);
    }
    function dobChangeHandler(event)
    {
        setDob(event.target.value);
    }

  return (
    <>
      <div className={styles.root_div}>
        <div className={styles.div_1}>
          <h2>Create An E-Mart Account</h2>
          <img src={registerIcon} alt="login Icon" />

          <form className={styles.form_box} onSubmit={signupHandler}>
            <label htmlFor="name" className={styles.input_label}>
              Full Name
            </label>
            <input
              type="name"
              id="name"
              className={styles.input_box}
              value={name}
              onChange={nameChangeHandler}
              placeholder="Enter Your Full Name"
            />

            <label htmlFor="email" className={styles.input_label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className={styles.input_box}
              value={email}
              onChange={emailChangeHandler}
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
              onChange={passwordChangeHandler}
              placeholder="Enter Your Password"
            />

            <label htmlFor="contact_number" className={styles.input_label}>
              Contact No
            </label>
            <input
              type="tel"
              id="contact_number"
              className={styles.input_box}
              value={contact}
              onChange={contactChangeHandler}
              placeholder="Enter Contact Number"
            />
            <label htmlFor="DOB" className={styles.input_label}>
              Date Of Birth
            </label>
            <div className={styles.div_last}>
              <input
                type="date"
                id="DOB"
                className={styles.dob}
                value={dob}
                onChange={dobChangeHandler}
              />
               <button type="submit" className={styles.signup_button}>
              Sign Up
            </button>
            </div>
          </form>
          <Link to="/login" className={styles.link}>
            Already have an account? Sign In!
          </Link>
        </div>
      </div>
    </>
  );
}
export default Signup;
