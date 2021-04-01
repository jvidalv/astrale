import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { AppState } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { SESSION_KEY } from './constants/session';
import themes from './constants/themes';
import { useGlobals } from './contexts/global';
import InitialStackNavigation from './navigation/initial-stack';
import MainStackNavigation from './navigation/main-stack';
import { DateUtils } from './utils';
import Storer from './utils/storer';

/**
 * @returns {*}
 * @constructor
 */
function Main() {
  const [{ session, theme, day }, dispatch] = useGlobals();
  const [isReady, setIsReady] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);
  const _theme = themes[theme];

  // Deal with background/active app
  React.useEffect(() => {
    // Handles screen focus and case when user reopens app one day later (Date has to be updated)
    const handleAppStateChange = (nextAppState) => {
      if (appState.match(/active/) && nextAppState === 'active') {
        const nDate = DateUtils.toAmerican(new Date());
        if (nDate !== day) {
          dispatch({
            type: 'setDay',
            day: nDate,
          });
        }
      }
      setAppState(nextAppState);
    };

    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [appState, day, dispatch]);

  // Backbones
  React.useEffect(() => {
    (async () => {
      try {
        const session = await Storer.get(SESSION_KEY);
        if (session) {
          dispatch({
            type: 'setSession',
            fields: { ...session },
          });
        }
      } finally {
        setIsReady(true);
      }
    })();
  }, [dispatch]);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={_theme}>
      <NavigationContainer theme={_theme}>
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
