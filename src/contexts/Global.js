import React, { createContext, useContext, useReducer } from 'react';

import default_session from '../constants/session';
import { DateUtils } from '../utils';

/**
 * @param state
 * @param action
 * @returns {{isAuthenticated: boolean}|{theme: *}|{theme: *, isAuthenticated: boolean, user: {}}}
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case 'switchTheme':
      return {
        ...state,
        theme: action.theme,
      };
    case 'setLogOut':
      return {
        ...state,
        session: default_session,
      };
    case 'toggleLoader':
      return {
        ...state,
        showLoader: !state.showLoader,
      };
    case 'setSession':
      return {
        ...state,
        session: { ...state.session, ...action.fields },
      };
    case 'setDay':
      return {
        ...state,
        day: action.day,
      };
    default:
      return {
        ...state,
      };
  }
};

/**
 *
 * @type {{session: {number: null, sex: null, name: null, sign: null, language: string, relationship: null, birthDate: null, notifications: boolean}, theme: string, showLoader: boolean, day: string}}
 */
export const initialState = {
  theme: 'dark',
  session: default_session,
  showLoader: false,
  day: DateUtils.toAmerican(new Date()),
};

/**
 * @type {React.Context<{session: {number: null, sex: null, name: null, sign: null, language: string, relationship: null, birthDate: null, notifications: boolean}, theme: string, showLoader: boolean, day: string}>}
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
