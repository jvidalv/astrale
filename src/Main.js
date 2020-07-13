import React from "react";
import {AppState, AsyncStorage} from "react-native";
import {Provider as PaperProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {useGlobals} from "./contexts/Global";
import themes from "./constants/themes";
import {AppLoading} from "expo";
import {Asset} from "expo-asset";
import MainStackNavigation from "./navigation/MainStackNavigation";
import InitialStackNavigation from "./navigation/InitialStackNavigation";
import Storer from "./utils/Storer";
import {SESSION_KEY} from "./constants/session";
import {AdMobInterstitial, setTestDeviceIDAsync} from "expo-ads-admob";
import Ads from "./credentials/admob";
import {DateUtils} from "./utils";

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
const fetchFonts = () => Font.loadAsync({});

const PERSISTENCE_KEY = "NAVIGATION_STATE";

/**
 * @returns {*}
 * @constructor
 */
function Main() {
    const [{session, theme, day}, dispatch] = useGlobals();
    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState();
    const [appState, setAppState] = React.useState(AppState.currentState);
    const _theme = themes[theme];

    // Handles screen focus and case when user reopens app one day later (Date has to be updated)
    const _handleAppStateChange = (nextAppState) => {
        if (appState.match(/active/) && nextAppState === "active") {
            const nDate = DateUtils.toAmerican(new Date());
            if (nDate !== day) {
                dispatch({
                    type: "setDay",
                    day: nDate,
                });
            }
        }
        setAppState(nextAppState);
    };

    // Deal with background/active app
    React.useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);
        return () => {
            AppState.removeEventListener("change", _handleAppStateChange);
        };
    }, []);

    // Custom fonts
    // let [fontsLoaded] = useFonts({
    //   poppins_light: require("../assets/fonts/Poppins-Light.ttf"),
    //   poppins_medium: require("../assets/fonts/Poppins-Medium.ttf"),
    //   poppins_regular: require("../assets/fonts/Poppins-Regular.ttf"),
    //   poppins_thin: require("../assets/fonts/Poppins-Thin.ttf"),
    //   poppins_bold: require("../assets/fonts/Poppins-Bold.ttf"),
    // });

    // Backbones
    React.useEffect(() => {
        (async () => {
            try {
                if (__DEV__) {
                    await setTestDeviceIDAsync("EMULATOR");
                    const state = await Storer.get(PERSISTENCE_KEY);
                    setInitialState(state);
                }

                // Admob config
                await AdMobInterstitial.setAdUnitID(Ads.intersticial);

                const session = await Storer.get(SESSION_KEY);
                if (session) {
                    dispatch({
                        type: "setSession",
                        fields: {...session},
                    });
                }
            } finally {
                setIsReady(true);
            }
        })();
    }, []);

    if (!isReady /* || !fontsLoaded*/) {
        return <AppLoading/>;
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
                    <MainStackNavigation/>
                ) : (
                    <InitialStackNavigation/>
                )}
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Main;
