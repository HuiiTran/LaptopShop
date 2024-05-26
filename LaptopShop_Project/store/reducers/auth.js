/* eslint-disable prettier/prettier */
import { AsyncStorage } from "react-native";

export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
let timer;


const setLogoutTimer = expirationTime => {
    return dispatch => {
      timer = setTimeout(() => {
        dispatch(logout());
      }, expirationTime);
    };
  };

const clearLogoutTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };


  export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem("userData");
    return { type: LOGOUT };
  };

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime));
        dispatch({ type: AUTHENTICATE, userId: userId, token: token });
      };
};



const saveDataToStorage = (userId,userName,token,  expirationDate) => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({
        token: token,
        id: userId,
        userName: userName,
        expiryDate: expirationDate.toISOString(),
      })
    );
  };
  