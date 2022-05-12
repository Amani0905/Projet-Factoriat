import {
  DELETE_POST_FAILED,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POST_BYID_SUCCESS,
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
    case DELETE_POST_LOADING:
      return { ...state, loading: true };
    case DELETE_POST_SUCCESS:
      return { ...state, postId: payload, loading: false, errors: false };
    case DELETE_POST_FAILED:
      return { ...state, loading: false, errors: payload };
    case GET_POST_BYID_SUCCESS:
      return { ...state, postInfo: payload };
    default:
      return state;
  }
};
export default PostReducer;
