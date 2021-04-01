import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import React from 'react';

import Main from './src/Main';
import { initialState, reducer, StateProvider } from './src/contexts/Global';
import Translations from './src/translations';

i18n.translations = Translations;
i18n.locale = Localization.locale;
i18n.fallbacks = true;

/**
 * @constructor
 */
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
}

export default App;
