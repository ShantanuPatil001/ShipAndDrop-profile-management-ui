import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authVerifyToken } from "../api/httpapi";
import HeaderAuth from "../components/header/header-auth";
const ProtectedAuth = () => {
  const [valid, SetValid] = useState("");
  const authValues = useSelector((state) => state.authToken);

  useEffect(() => {
    async function fetchData() {
      await authVerifyToken(authValues.token)
        .then(() => {
          console.log("GOT here");
          SetValid("true");
        })
        .catch((error) => {
          SetValid("error");
        });
    }
    fetchData();
  }, [valid,authValues]);
  if (valid === "true") {
    return <>
      <HeaderAuth />
      <Outlet />
    </>;
  } else if (valid === "error") {
    return <Navigate to="/login" replace />;
  } else {
    return <h1 className="text-center text-white">Loading...</h1>;
  }
};

export default ProtectedAuth;
