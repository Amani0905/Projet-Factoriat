import axios from "axios";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
export const register = (personData) => async (dispatch) => {
  try {
    const res = axios.post("/api/person/register", personData);
    dispatch({ tyope: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
