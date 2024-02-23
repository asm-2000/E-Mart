import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isloggedin: false,
  loginHandler: () => {},
  logoutHandler: () => {},
  signupHandler: () => {},
});

function AuthContextProvider({ children }) {
  const [isloggedin, setLoginStatus] = useState(false);

  function loginHandler(loginData) {
    const authdata = fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    }).then((res) => {
      res.json();
      console.log(res);
    });
    console.log(authdata);

    // if (token === true) {
    //   setLoginStatus(true);
    // }
  }

  function logoutHandler() {}

  async function signupHandler(signupData) {
    const response = await fetch("http://localhost:8080/users/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
    if (response.status === 201) {
      const result = {
        msg: "Sign up successful!",
      };
      return result;
    } else {
      const result = {
        msg: "Another User exists with the provided email!",
      };
      return result;
    }
  }
  return (
    <AuthContext.Provider
      value={{ isloggedin, logoutHandler, loginHandler, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
