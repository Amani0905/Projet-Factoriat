import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";

const Dashbordposts = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);
  return (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Dashbordposts;
