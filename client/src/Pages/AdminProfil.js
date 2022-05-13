import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";

const AdminProfil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // identifcation d'admin (exclusivement admin task) //
  const { isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);

  return (
    <div>
      <button
        onClick={logout}
        style={{ fontWeight: "bold", backgroundColor: "#f7867e" }}
      >
        LOGOUT
      </button>
      <br />

      <Link to="/Technoriat/Dashbord">
        <button style={{ fontWeight: "bold", backgroundColor: "#adf2c2" }}>
          Les publications
        </button>
      </Link>
      <br />

      <Link to="/Technoriat/UsersList">
        <button style={{ fontWeight: "bold", backgroundColor: "#adf2c2" }}>
          Les utilisateurs
        </button>
      </Link>
    </div>
  );
};

export default AdminProfil;
