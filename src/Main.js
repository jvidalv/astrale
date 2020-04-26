import React from 'react';
import {AsyncStorage} from "react-native";
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {useGlobals} from "./contexts/Global";
import themes from "./constants/themes";
import {AppLoading} from "expo";
import {Asset} from 'expo-asset';
import InitialStackNavigation from "./navigation/InitialStackNavigation";
import MainStackNavigation from "./navigation/MainStackNavigation";

/**
 * Gets active theme dark/light
 * @returns {object}
 */
const useTheme = () => {
    const [{theme}] = useGlobals();
    return themes[theme];
};

/**
 * Loads in cache images
 * @param images
 * @returns {*}
 */
const cacheImages = (images) => {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * @returns {*}
 * @constructor
 */
function Main() {
    const [isReady, setIsReady] = React.useState(true);
    const [initialState, setInitialState] = React.useState();
    const [imagesLoaded, setImagesLoaded] = React.useState(true);

    const imageAssets = cacheImages([]);

    React.useEffect(() => {
        const restoreState = async () => {
            try {
                await Promise.all([...imageAssets]);
            } finally {
                setImagesLoaded(true);
            }
        };
        restoreState();
    });

    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                const state = JSON.parse(savedStateString);

                setInitialState(state);
            } finally {
                setIsReady(true);
            }
        };

        if (!isReady) {
            restoreState();
        }
    }, [isReady]);

    if (!isReady || !imagesLoaded) {
        return <AppLoading/>;
    }

    return (
        <PaperProvider theme={useTheme()}>
            <NavigationContainer
                initialState={initialState}
                onStateChange={state =>
                    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
                }
                theme={useTheme()}>

                <MainStackNavigation />
               {/*<InitialStackNavigation/>*/}
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Main;
