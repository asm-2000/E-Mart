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

  function loginHandler() {}
  function logoutHandler() {}
  function signupHandler() {}
  return (
    <AuthContext.Provider
      value={{ isloggedin, logoutHandler, loginHandler, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
