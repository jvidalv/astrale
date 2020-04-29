import {DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme,} from '@react-navigation/native';
import {DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

const themes = {
    light: {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
        },
    },
    dark: {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background : '#192f6a',
            primary : '#ffb942',
            accent : '#415bea',
            surface : '#12265c',
        },
    }
};

export default themes;