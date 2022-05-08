import {
  GET_POST_FAILED,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "../actions/poststypes";

const initState = {
  postList: [],
  loading: false,
  errors: null,
};

const PostReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { ...state, postList: payload, loading: false, errors: false };
    case GET_POST_FAILED:
      return { ...state, loading: false, errors: payload };
    default:
      return state;
  }
};
export default PostReducer;
