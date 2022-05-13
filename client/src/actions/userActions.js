import axios from "axios";

export const getUsersList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_LOADING });
    const res = await axios.get("/admin/api/user");
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error });
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    // dispatch({ type: GET_USER_LOADING });
    const res = await axios.get(`/admin/api/user/${userId}`);
    dispatch({ type: GET_USER_BYID_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: error });
  }
};

export const updateUser = (userData, nav) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_LOADING });
    const res = await axios.put(`/admin/api/post/${userData._id}`, userData);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    // dispatch(getPosts());
    //   nav("/Technoriat/Dashbord");
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILED, payload: error });
  }
};
