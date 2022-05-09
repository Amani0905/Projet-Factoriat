import axios from "axios";
import {
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
