import { USER_LOG_IN, USER_LOG_OUT } from "./userType";

export const userLogin = user => ({
  type: USER_LOG_IN,
  payload: user
});

export const userLogout = () => ({
  type: USER_LOG_OUT
});
