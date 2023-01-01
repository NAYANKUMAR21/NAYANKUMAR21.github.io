import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Adhoc/Login";
import Email from "../Email-Service/Email";
import MainPags from "./MainPags";
import PrivateAuth from "../Adhoc/PrivateAuth";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPags />}></Route>
      <Route
        path="/Admin/Route"
        element={
          <PrivateAuth>
            <Email />
          </PrivateAuth>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoute;
