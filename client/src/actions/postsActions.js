import axios from "axios";
import {
  ADD_POST_FAILED,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILED,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POST_FAILED,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./poststypes";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_LOADING });
    const res = await axios.get("/admin/api/post");
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAILED, payload: error });
  }
};

export const addPost = (postData, nav) => async (dispatch) => {
  try {
    dispatch({ type: ADD_POST_LOADING });
    const res = await axios.post("/admin/api/post", postData);
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({ type: ADD_POST_FAILED, payload: error });
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_LOADING });
    const res = await axios.delete(`/admin/api/post/${postId}`, postId);
    dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    dispatch(getPosts());
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILED, payload: error });
  }
};
