import common from './common';
import custom from './custom';
import forms from './forms';
import horoscope from './horoscope';
import learn from './learn';

const Translations = {
  ca: {
    ...common.es,
    ...custom.es,
    ...forms.es,
    ...horoscope.es,
    ...learn.es,
  },
  es: {
    ...common.es,
    ...custom.es,
    ...forms.es,
    ...horoscope.es,
    ...learn.es,
  },
  en: {
    ...common.en,
    ...custom.en,
    ...forms.en,
    ...horoscope.en,
    ...learn.en,
  },
};

export default Translations;
