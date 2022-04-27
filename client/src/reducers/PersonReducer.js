import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const initState = {
  userInfo: {},
  token: null,
  errors: null,
  isAuth: false,
};
const PersonReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_FAIL:
      return { ...state, errors: payload };
    case REGISTER_SUCCESS:
      return {
        ...state,
        personInfo: payload.newPerson,
        token: payload.token,
        isAuth: true,
        errors: null,
      };
    default:
      return state;
  }
};
export default PersonReducer;
