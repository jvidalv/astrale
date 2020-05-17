import React from "react";
import { AsyncStorage } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { useGlobals } from "./contexts/Global";
import themes from "./constants/themes";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import MainStackNavigation from "./navigation/MainStackNavigation";
import InitialStackNavigation from "./navigation/InitialStackNavigation";
import * as Font from "expo-font";
import Storer from "./utils/Storer";
import { SESSION_KEY } from "./constants/session";

/**
 * @param images {string[]}
 * @returns {*}
 */
const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

/**
 * @returns {Promise<void>}
 */
const fetchFonts = () =>
  Font.loadAsync({
    poppins_light: require("../assets/fonts/Poppins-Light.ttf"),
    poppins_medium: require("../assets/fonts/Poppins-Medium.ttf"),
    poppins_regular: require("../assets/fonts/Poppins-Regular.ttf"),
    poppins_thin: require("../assets/fonts/Poppins-Thin.ttf"),
    poppins_bold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

const PERSISTENCE_KEY = "NAVIGATION_STATE";

/**
 * @returns {*}
 * @constructor
 */
function Main() {
  const [{ session, theme }, dispatch] = useGlobals();
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const _theme = themes[theme];

  React.useEffect(() => {
    (async () => {
      try {
        await fetchFonts();
      } finally {
        setFontsLoaded(true);
      }
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const state = await Storer.get(PERSISTENCE_KEY);
        setInitialState(state);

        const session = await Storer.get(SESSION_KEY);
        if (session) {
          dispatch({
            type: "setSession",
            fields: { ...session },
          });
        }
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  if (!isReady || !fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
        theme={_theme}
      >
        {session.basicsDone ? (
          <MainStackNavigation />
        ) : (
          <InitialStackNavigation />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Main;
