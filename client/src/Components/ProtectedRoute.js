import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuth } = useSelector((state) => state.person);

  return <div>
      {isAuth ? <Outlet/> : <Navigate to='/Login'/>}
  </div>;
};

export default ProtectedRoute;
