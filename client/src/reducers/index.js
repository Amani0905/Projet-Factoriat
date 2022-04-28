import userReducer from "./PersonReducer";
import { combineReducers } from "redux";

export default combineReducers({ user: userReducer });
