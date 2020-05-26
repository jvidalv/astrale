import React from "react";
import ViFetch from "../utils/ViFetch";

/**
 * @type {{data: null, loading: boolean}}
 */
const initialState = {
  loading: true,
  data: null,
};

/**
 * @param state
 * @param action
 * @returns {{loading: boolean}|{data: *, loading: boolean}}
 */
function reducer(state, action) {
  switch (action.type) {
    case "fetchResponse":
      return {
        loading: false,
        data: action.data,
      };
    case "fetchAgain":
      return {
        loading: true,
        data: null,
      };
    default:
      throw new Error("action.type is not defined inside reducer's switch");
  }
}

/**
 * @param method {string}
 * @param params {object}
 * @param url {string}
 * @param values {object}
 * @returns {{data: *, setLoading: setLoading, loading: *, error: boolean}}
 */
const useFetch = ({ method, params, url }, values = {}) => {
  const [{ data, loading }, dispatch] = React.useReducer(reducer, initialState);
  const [error, setError] = React.useState(false);
  const setLoading = () => {
    dispatch({ type: "fetchAgain" });
  };

  React.useEffect(() => {
    let isSubscribed = true;

    if (loading) {
      ViFetch(method, url, params, values)
        .then((res) => {
          isSubscribed && dispatch({ type: "fetchResponse", data: res });
        })
        .catch(() => isSubscribed && setError(true));
    }

    return () => {
      isSubscribed = false;
    };
  }, [loading]);

  return { data, loading, error, setLoading };
};

export default useFetch;
