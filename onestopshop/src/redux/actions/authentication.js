import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setErrors, resetErrors } from "./errors";
import instance from "./instance";

// export const profile = () => {
//   return async dispatch => {
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/profile/");
//       const profile = res.data;
//       dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const res = await instance.get("profile/");
      const profile = res.data;
      dispatch({
        type: actionTypes.FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
export const checkForExpiredToken = () => {
  return async dispatch => {
    // Get token
    const token = await localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        dispatch(setAuthToken(token));
        // Set user
        dispatch(setCurrentUser(user));
        // dispatch(profile());
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  return async dispatch => {
    if (token) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = await `Bearer ${token}`;
      dispatch(fetchProfile());
    } else {
      localStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
    }
  };
};

// const setCurrentUser = user => ({
//   type: actionTypes.SET_CURRENT_USER,
//   payload: user
// });

const setCurrentUser = user => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: user });
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
