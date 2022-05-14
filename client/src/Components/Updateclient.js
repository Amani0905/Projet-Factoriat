import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getUserById,
  updateUser as UpdateclientAction,
} from "../actions/userActions";

const Updateclient = () => {
  const { clientId } = useParams();
  const dispatch = useDispatch();
  const clientInfo = useSelector((state) => state.client.clientInfo);
  useEffect(() => {
    dispatch(getUserById(clientId));
  }, [dispatch]);
  const clientInfoLS = JSON.parse(localStorage.getItem("clientInfo"));
  const nav = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: { ...clientInfoLS },
  });

  const updateClient = (data) => {
    dispatch(UpdateclientAction({ ...data, _id: clientId }, nav));
  };

  return (
    <div>
      <div>
        <label>Name : </label>
        {<>{clientInfoLS.name}</>}
        <br />
        <label>Email : </label>
        {<>{clientInfoLS.email}</>}
      </div>
      <form onSubmit={handleSubmit(updateClient)}>
        <label>Projet</label>
        <select required type="text" {...register("project")}>
          <option value='submitted'>submitted</option>
          <option value='processed'>processed</option>
          <option value='accepted'>accepted</option>
          <option value='rejected'>rejected</option>
        </select>
        <br />
        <button style={{ fontWeight: "bold", backgroundColor: "aqua" }}>
          Confirmer
        </button>
        <br />
      </form>

      <Link to="/Technoriat/UsersList">
        <button style={{ fontWeight: "bold", backgroundColor: "pink" }}>
          Annuler
        </button>
      </Link>
    </div>
  );
};

export default Updateclient;
