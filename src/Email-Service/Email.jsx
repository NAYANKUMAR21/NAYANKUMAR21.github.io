import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { AuthContext } from "../COntext/Authentication";
//https://emailservice-72xj.onrender.com/
const Email = () => {
  const { getEmail, data } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getEmail().then((res) => {
      setLoading(false);
    });
  }, []);
  //   if (loading) {
  //     return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  //   }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "0px", fontSize: "50px" }}>Mails</h1>
        <p style={{ fontSize: "15px", color: "teal", margin: "0px" }}>
          All mails
        </p>
      </div>
      <div style={{ marginTop: "50px" }}>
        {loading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : (
          data?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  margin: "auto",
                  marginTop: "30px",
                  border: "1px solid teal",
                  padding: "10px",
                  width: "70%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <p>
                    {" "}
                    <span style={{ color: "#e54c4c" }}>Name :</span> {item.name}
                  </p>
                  <p>
                    <span style={{ color: "#e54c4c" }}>Email :</span>{" "}
                    {item.email}
                  </p>
                </div>
                <div
                  style={{ margin: "auto", marginTop: "20px", width: "80%" }}
                >
                  <p>
                    <span style={{ color: "#e54c4c" }}>Message :</span>{" "}
                  </p>
                  <p>{item.body}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Email;
