import React from 'react';

/**
 * @param method
 * @param url
 * @param params
 * @param values
 * @returns {Promise<T>}
 */
export const fetcher = async (method, url, params, values) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'josep-is-the-best-programmer-out-there',
    },
  };

  if (method === 'GET') {
    for (const param of params) {
      url = url.replace('{' + param + '}', values[param]);
    }
  }

  if (method === 'POST') {
    config.body = JSON.stringify(values);
  }

  return fetch(url, config).then((res) => {
    try {
      if (res.ok) {
        return res.json();
      }
    } catch {
      throw Error('Error while fetching data');
    }
  });
};

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
    case 'fetchResponse':
      return {
        loading: false,
        data: action.data,
      };
    case 'fetchAgain':
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
 * @returns {{data: *, setLoading: (function(): void), loading: *, error: number}}
 */
const useFetch = ({ method, params, url }, values = {}) => {
  const [{ data, loading }, dispatch] = React.useReducer(reducer, initialState);
  const [error, setError] = React.useState(0);
  const setLoading = () => {
    dispatch({ type: 'fetchAgain' });
  };

  React.useEffect(() => {
    let isSubscribed = true;

    if (loading) {
      fetcher(method, url, params, values)
        .then((res) => {
          isSubscribed && dispatch({ type: 'fetchResponse', data: res });
        })
        .catch(() => {
          setError((error) => error + 1);
        });
    }

    return () => {
      isSubscribed = false;
    };
  }, [loading]);

  return { data, loading, error, setLoading: () => setLoading() };
};

export default useFetch;
