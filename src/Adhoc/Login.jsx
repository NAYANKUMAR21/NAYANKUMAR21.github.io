import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../COntext/Authentication";
import styles from "./login.module.css";
const Login = () => {
  const [sentence, setSentence] = useState("");
  const navigate = useNavigate();
  const { auth, login } = useContext(AuthContext);
  console.log(auth, login);
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setSentence("");
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(cred);

    login(cred)
      .then((res) => {
        console.log(res, "from login .then");
        if (res) {
          navigate("/Admin/Route");
        } else {
          setSentence("Wrong credentails");
        }
      })
      .catch((er) => {
        navigate("/");
        console.log(er.message);
      });
  };
  return (
    <div className={styles.login_div}>
      <form onSubmit={HandleSubmit} style={{ styles }}>
        <input
        className={styles.iemail}
          type="email"
          placeholder="Enter Email"
          name="email"
          value={cred.email}
          onChange={handlechange}
        />
        <input
         className={styles.iemail}
          type="password"
          placeholder="Enter password"
          name="password"
          value={cred.password}
          onChange={handlechange}
        />

        <input type="submit" value={"Login"}  className={styles.Login}/>
        {sentence && (
          <p style={{ textAlign: "left", color: "#e54c4c", fontSize: "14px" }}>
            {sentence}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
