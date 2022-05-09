import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost as addPostAction } from "../actions/postsActions";

const Addnewpost = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { register, handleSubmit } = useForm();
  // useEffect(() => {
  //  nav("/Technoriat/Dashbord/");
  //   }, [nav]);
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
        <button>Add</button> <br />
      </form>
    </div>
  );
};

export default Addnewpost;
