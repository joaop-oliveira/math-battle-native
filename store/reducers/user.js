import { USER_LOG_IN, USER_LOG_OUT } from "../actions/userType";

const initialState = {
  user: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOG_IN:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default usersReducer;
