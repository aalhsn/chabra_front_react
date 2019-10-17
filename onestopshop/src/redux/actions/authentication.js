import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setErrors, resetErrors } from "./errors";
import instance from "./instance";

export const profile = () => async dispatch => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch({ type: actionTypes.SET_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
  }
};

const setCurrentUser = token => {
  let user;
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    user = jwt_decode(token);
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
    user = null;
  }

  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const response = await instance.post("login/", userData);
      const user = response.data;
      dispatch(setCurrentUser(user.access));
      dispatch(resetErrors());

      history.replace("/");
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("register/", userData);
      const user = res.data;

      dispatch(setCurrentUser(user.access));

      dispatch(login(userData, history));
      dispatch(resetErrors());

      history.replace("/");
    } catch (error) {
      console.error(error.response.data);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  // Check for token expiration
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;

    // Decode token and get user info
    user = jwt_decode(token);

    // Check token expiration
    if (user.exp >= currentTimeInSeconds) {
      // Set user
      return setCurrentUser(token);
    }
  }
  return logout();
};
