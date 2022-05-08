import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const { isAuth , role } = useSelector((state) => state.person);

  return <div>{(isAuth && role==='admin') ? <Outlet /> : <Navigate to="/Login" />}</div>;
};

export default AdminProtectedRoute;
