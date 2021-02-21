import { Language } from '../utils';

export const SESSION_KEY = 'session-key';

const default_session = {
  name: null,
  sign: null,
  birthDate: null,
  sex: null,
  relationship: null,
  number: null,
  notifications: false,
  language: Language.filteredLocale(),
};

export default default_session;
