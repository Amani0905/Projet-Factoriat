import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";
import { useEffect } from "react";
import { getUsersList } from "../actions/userActions";

const UsersList = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  // Affichage des users : //
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);
  const { clientList, loading } = useSelector((state) => state.client);

  const updateclient = (client) => {
    // dispatch({type:'transfertdata',payload:client})
    nav(`/Technoriat/UsersList/UpdateClient/${client._id}`);
    localStorage.setItem("clientInfo", JSON.stringify(client));
  };

  return (
    <div>
      {clientList.map((el) => (
        <>
          <h4>{el.name}</h4>
          <h6>{el.email}</h6>
          <h6>{el.project}</h6>
          <button
            onClick={() => updateclient(el)}
            style={{ fontWeight: "bold", backgroundColor: "#f7867e" }}
          >
            Changer le statu du projet
          </button>
        </>
      ))}
      <br />
      <br />

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
