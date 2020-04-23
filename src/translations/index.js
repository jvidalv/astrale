import common from "./common";
import custom from "./custom";
import forms from "./forms";

const Translations = {
    es: {
        ...common.es,
        ...custom.es,
        ...forms.es

    },
    en: {
        ...common.en,
        ...custom.en,
        ...forms.en
    },
};

export default Translations;
