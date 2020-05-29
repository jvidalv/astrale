import React, { createContext, useContext, useReducer } from "react";
import default_session, { SESSION_KEY } from "../constants/session";
import Storer from "../utils/Storer";

/**
 * @param state
 * @param action
 * @returns {{isAuthenticated: boolean}|{theme: *}|{theme: *, isAuthenticated: boolean, user: {}}}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "switchTheme":
      return {
        ...state,
        theme: action.theme,
      };
    case "setLogOut":
      return {
        ...state,
        session: default_session,
      };
    case "toggleLoader":
      return {
        ...state,
        showLoader: !state.showLoader,
      };
    case "showSnackbar":
      return {
        ...state,
        snackbar: action.text,
      };
    case "setSession":
      return {
        ...state,
        session: { ...state.session, ...action.fields },
      };
    case "setAndStoreSession":
      Storer.set(SESSION_KEY, { ...state.session, ...action.fields });
      return {
        ...state,
        session: { ...state.session, ...action.fields },
      };
    default:
      return {
        ...state,
      };
  }
};

/**
 * @type {{session: {daysRow: number, number: null, basicsDone: boolean, sex: null, name: null, sign: null, days: number, language: string, relationship: null, birthDate: null, palmistry: boolean, notifications: boolean}, theme: string, toggle: null, showLoader: boolean, notifications: boolean}}
 */
export const initialState = {
  theme: "dark",
  session: default_session,
  notifications: false,
  showLoader: false,
  snackbar: null,
};

/**
 * @type {React.Context<{session: {daysRow: number, number: null, basicsDone: boolean, sex: null, name: null, sign: null, days: number, language: string, relationship: null, birthDate: null, palmistry: boolean, notifications: boolean}, theme: string, toggle: null, showLoader: boolean, notifications: boolean}>}
 */
export const StateContext = createContext(initialState);

/**
 * Provider
 * @param reducer
 * @param initialState
 * @param children
 * @returns {*}
 * @constructor
 */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/**
 * @returns {{theme: string}}
 */
export const useGlobals = () => useContext(StateContext);
