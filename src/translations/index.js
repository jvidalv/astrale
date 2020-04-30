import common from "./common";
import custom from "./custom";
import forms from "./forms";
import horoscope from "./horoscope";

const Translations = {
    es: {
        ...common.es,
        ...custom.es,
        ...forms.es,
            ...horoscope.es,
    },
    en: {
        ...common.en,
        ...custom.en,
        ...forms.en,
        ...horoscope.en,

    },
};

export default Translations;
