import userReducer from "./PersonReducer";
import PostReducer from "./PostReducer";
import { combineReducers } from "redux";

export default combineReducers({ user: userReducer, post: PostReducer });
