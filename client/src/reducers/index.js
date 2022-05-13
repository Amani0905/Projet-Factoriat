import PersonReducer from "./PersonReducer";
import PostReducer from "./PostReducer";
import { combineReducers } from "redux";
import UserReducer from "./UsersReducer";

export default combineReducers({
  person: PersonReducer,
  post: PostReducer,
  user: UserReducer,
});
