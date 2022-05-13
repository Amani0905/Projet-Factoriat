// import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  updatePost as UpdatepostAction,
  getPostById,
} from "../actions/postsActions";

const Updatepost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.post.postInfo);
  useEffect(() => {
    dispatch(getPostById(postId));
  }, [dispatch]);
  const postInfoLS = JSON.parse(localStorage.getItem("postInfo"));
  const nav = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...postInfoLS },
  });
  const updatePost = (data) => {
    dispatch(UpdatepostAction({ ...data, _id: postId }, nav));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(updatePost)}>
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
        <button style={{ fontWeight: "bold", backgroundColor: "aqua" }}>
          Update
        </button>{" "}
        <br />
      </form>
      <Link to="/Technoriat/Dashbord">
        <button style={{ fontWeight: "bold", backgroundColor: "pink" }}>
          Annuler
        </button>
      </Link>
    </div>
  );
};

export default Updatepost;
