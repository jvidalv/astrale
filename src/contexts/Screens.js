import React, {createContext, useContext, useReducer} from "react";

/**
 * @param state
 * @param action
 * @returns {{isAuthenticated: boolean}|{theme: *}|{theme: *, isAuthenticated: boolean, user: {}}}
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case "setStatusBar":
            return {
                ...state,
                statusBarHidden: action.statusBarHidden,
                offsetY: action.offsetY,
            };
        default:
            return {
                ...state
            }
    }
};

/**
 * @type {{statusBarHidden: boolean}}
 */
export const initialState = {
    statusBarHidden: false,
};

/**
 * @type {React.Context<{theme: string}>}
 */
export const ScreensContext = createContext(initialState);

/**
 * Provider
 * @param reducer
 * @param initialState
 * @param children
 * @returns {*}
 * @constructor
 */
export const ScreensProvider = ({reducer, initialState, children}) => (
    <ScreensContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ScreensContext.Provider>
);

/**
 * @returns {{theme: string}}
 */
export const useScreens = () => useContext(ScreensContext);