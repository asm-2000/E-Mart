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
    }).then((res) => {res.json();
    console.log(res)});
    console.log(authdata)

    // if (token === true) {
    //   setLoginStatus(true);
    // }
  }
  function logoutHandler() {}
  function signupHandler(signupData) {
    fetch("http://localhost:8080/users/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((result) => console.log(result))
      .catch((err) => console.log("error signing up"));
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
