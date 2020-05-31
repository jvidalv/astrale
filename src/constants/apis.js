/**
 * Check for environment to pick a base
 * @type {string}
 */
const BASE_PATH =
  process.env.NODE_ENV === "development"
    ? "http://192.168.10.10/api/"
    : "https://test.vvadmin.dev/api/";

/**
 *
 * @type {{daily: {method: string, params: [string, string], url: string}, astrology: {method: string, params: [string, string], url: string}, compatibility: {method: string, params: [string, string], url: string}}}
 */
const api_calls = {
  daily: {
    url: `${BASE_PATH}astrale/daily?day={day}&sign={sign}`,
    params: ["day", "sign"],
    method: "GET",
  },
  compatibility: {
    url: `${BASE_PATH}astrale/compatibility?sign1={sign1}&sign2={sign2}`,
    params: ["sign1", "sign2"],
    method: "GET",
  },
  astrology: {
    url: `${BASE_PATH}astrale/message`,
    params: ["email", "question", "astrologer"],
    method: "POST",
  },
  user: {
    url: `${BASE_PATH}astrale/user?XDEBUG_SESSION_START=10670`,
    params: [],
    method: "POST",
  },
};

export default api_calls;
