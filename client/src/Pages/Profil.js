import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/personActions";

const Profil = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  const { isAuth, userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuth) nav("/Technoriat/Login");
  }, [isAuth, nav]);
  return (
    <div>
      {userInfo.project === "submitted" ? (
        <h1>Votre projet à bien était soumis.</h1>
      ) : userInfo.project === "processed" ? (
        <h1>Votre projet est en cours d'étude.</h1>
      ) : userInfo.project === "accepted" ? (
        <h1>
          Félicitations. Votre projet a était accepté, on vous contactera
          prochainement.
        </h1>
      ) : (
        <h1>Votre projet a était malheuresement réfusé.</h1>
      )}

      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Profil;
