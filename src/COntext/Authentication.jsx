import axios from "axios";
import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);
  const login = async (cred) => {
    const { email, password } = cred;
    console.log(cred, "from entranve ceontex");
    if (!email || !password) {
      return;
    }
    try {
      const res = await axios.post(
        "https://nayanmail.onrender.com/auth/login",
        cred
      );
      if (res.data) {
        setAuth(true);
      }
      console.log(res, "from the contex");
      return true;
    } catch (er) {
      setAuth(false);

      console.log(er.message, "from contex came from backend");
      return false;
    }
  };

  const getEmail = async () => {
    try {
      const res = await axios.get("https://nayanmail.onrender.com/");
      console.log(res);
      if (res.data) {
        setData([...res.data]);
      }
      return;
    } catch (er) {
      console.log(er.message);
      return;
    }
  };
  const postMail = async (post) => {
    const { email, name, body } = post;
    if (!email || !body || !name) {
      return;
    }
    console.log(post, "fform the post mail");
    try {
      let x = await axios.post("https://nayanmail.onrender.com/", {
        email: post.email,
        name: post.name,
        body: post.body,
      });
      console.log(x);
    } catch (er) {
      console.log(er.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        getEmail,
        data,
        postMail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
