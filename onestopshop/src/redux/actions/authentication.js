import * as actionTypes from "./actionTypes";
import jwt_decode from "jwt-decode";
import { setErrors, resetErrors } from "./errors";
import instance from "./instance";

export const profile = () => async dispatch => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch(fetchOrders())
    dispatch({ type: actionTypes.SET_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
  }
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    // Get token
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));

      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = async token => {
  if (token) {
     localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
     localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: user });
    if (user) dispatch(profile());
  };
};

export const login = (userData, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.access);
      setAuthToken(user.access);
      dispatch(setCurrentUser(decodedUser));
      dispatch(resetErrors());
      history.replace("/");
    } catch (error) {
      console.error(error);
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
      await instance.post("register/", userData);
      dispatch(login(userData, history));
      dispatch(resetErrors());
      history.replace("/");
    } catch (error) {
      console.error(error.response.data);
      dispatch(setErrors(error.response.data));
  
    }
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};



export const fetchOrders = () => async dispatch => {
  try {
    const res = await instance.get("items/");
    const orders = res.data;
    dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders });
  } catch (error) {
    console.error(error);
  }
};
