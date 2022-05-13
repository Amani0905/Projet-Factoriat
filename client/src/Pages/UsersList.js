import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../actions/personActions";

const UsersList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <div>
      <button
        onClick={logout}
        style={{ fontWeight: "bold", backgroundColor: "#f7867e" }}
      >
        LOGOUT
      </button>
      <br />

      <Link to="/Technoriat/AdminProfil">
        <button style={{ fontWeight: "bold", backgroundColor: "#adf2c2" }}>
          Retour
        </button>
      </Link>
    </div>
  );
};

export default UsersList;
