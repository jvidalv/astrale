import React from "react";
import {useGlobals} from "../contexts/Global";

const THEME_DARK = 'dark';
const THEME_LIGHT = 'light'

export const useIsDark = () => {
    const [{theme}] = useGlobals();
    return theme === THEME_DARK;
}

export const useIsLight= () => {
    const [{theme}] = useGlobals();
    return theme === THEME_LIGHT;
}