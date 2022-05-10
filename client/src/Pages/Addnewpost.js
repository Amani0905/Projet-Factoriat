import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost as addPostAction } from "../actions/postsActions";

const Addnewpost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  const addnewpost = (data) => {
    dispatch(addPostAction(data, nav));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addnewpost)}>
        <label>Tittre</label>
        <input required type="text" {...register("title")}></input> <br />
        <label>shorttext</label>
        <input required type="text" {...register("shorttext")}></input>
        <br />
        <label>Contenu</label>
        <input required type="text" {...register("content")}></input>
        <br />
        <label>image</label>
        <input required type="text" {...register("image")}></input>
        <br />
        <button style={{fontWeight:'bold',backgroundColor:'aqua'}}>Add</button> <br />
      </form>
      <Link to="/Technoriat/Dashbord">
        <button style={{fontWeight:'bold',backgroundColor:'pink'}}>Annuler</button>
      </Link>
    </div>
  );
};

export default Addnewpost;
