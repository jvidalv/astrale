/**
 * Custom class to deal with the shitty ass js dates
 */
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

const ThemeUtils = {
    isDark: (theme: string): boolean => theme === THEME_DARK,
    isLight: (theme: string): boolean => theme === THEME_LIGHT,
}

export default ThemeUtils;