import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../COntext/Authentication";

const PrivateAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);

  console.log("from the ahoc", auth);
  if (auth) {
    console.log("NOW from adhoc", auth);
    return children;
  } else {
    console.log("LATER FROM adhoc", auth);
    return <Navigate to="/login" />;
  }
};

export default PrivateAuth;
