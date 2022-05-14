import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost as addPostAction } from "../actions/postsActions";
import { logoutAction } from "../actions/personActions";

const Addnewpost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const addnewpost = (data) => {
    dispatch(addPostAction(data, nav));
  };
  const logout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div>
    <div className="nav-side-menu">
    <div className="brand"><img
            className="logo-Technoriat"
            src={require("../styles/img/Logo Technoriat.png")}
            alt="Technoriat"
          /></div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
    <div className="menu-list">
      <ul id="menu-content" className="menu-content collapse out">
        <li>
          <a href="/Technoriat/AdminProfil">
          <i className="fa-solid fa-gauge fa-lg"></i> Dashboard
          </a>
        </li>
        <li>
          <a href="/Technoriat/Dashbord">
            <i className="fas fa-user-tie fa-lg" />Posts
          </a>
        </li>
        <li>
          <a href="/Technoriat/UsersList">
            <i className="fa fa-users fa-lg" /> &nbsp;Users
          </a>
        </li>
        <li>
      <a><i className="fas fa-user-tie fa-lg" />&nbsp;<button
        onClick={logout}>
          &nbsp;Logout
      </button>
      </a>
          
        </li>
      </ul>
    </div>
      <form onSubmit={handleSubmit(addnewpost)}>
        <label>Tittre</label>
        <input required type="text" {...register("title")}></input> <br />
        <label>Date</label>
        <input required type="date" {...register("date")}></input> <br />
        <label>Shorttext</label>
        <input required type="text" {...register("shorttext")}></input>
        <br />
        <label>Contenu</label>
        <input required type="text" {...register("content")}></input>
        <br />
        <label>Image</label>
        <input required type="text" {...register("image")}></input>
        <br />
        <button style={{fontWeight:'bold',backgroundColor:'aqua'}}>Add</button> <br />
      </form>
      <Link to="/Technoriat/Dashbord">
        <button style={{fontWeight:'bold',backgroundColor:'pink'}}>Annuler</button>
      </Link>
    </div>
    </div>
  );
};

export default Addnewpost;
