import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "poppins_regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "poppins_medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "poppins_light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "poppins_thin",
      fontWeight: "normal",
    },
  },
};

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;

const themes = {
  light: {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      accent: "#bc4598",
    },
    fonts: configureFonts(fontConfig),
  },
  dark: {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      accent: "#bc4598",
    },
    fonts: configureFonts(fontConfig),
  },
};

export default themes;
