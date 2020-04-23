import React, {createContext, useContext, useReducer} from "react";

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
        case "setAuthenticated":
            return {
                ...state,
                isAuthenticated: true,
            };
        case "logout":
            return {
                ...initialState,
                theme: state.theme,
            };
        default:
            return {
                ...state
            }
    }
};

/**
 * @type {{theme: string}}
 */
export const initialState = {
    theme: 'dark',
};

/**
 * @type {React.Context<{theme: string}>}
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
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

/**
 * @returns {{theme: string}}
 */
export const useGlobals = () => useContext(StateContext);