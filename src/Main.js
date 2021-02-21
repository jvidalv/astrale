import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { AppState } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { SESSION_KEY } from './constants/session';
import themes from './constants/themes';
import { useGlobals } from './contexts/Global';
import InitialStackNavigation from './navigation/InitialStackNavigation';
import MainStackNavigation from './navigation/MainStackNavigation';
import { DateUtils } from './utils';
import Storer from './utils/Storer';

/**
 * @returns {*}
 * @constructor
 */
function Main() {
  const [{ session, theme, day }, dispatch] = useGlobals();
  const [isReady, setIsReady] = React.useState(false);
  const [appState, setAppState] = React.useState(AppState.currentState);
  const _theme = themes[theme];

  // Handles screen focus and case when user reopens app one day later (Date has to be updated)
  const _handleAppStateChange = (nextAppState) => {
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

  // Deal with background/active app
  React.useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

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
  }, []);

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
