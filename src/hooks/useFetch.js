import React from "react";

/**
 * @param {method : {string}, params : {array}, url : {string}}
 * @param values {object}
 * @returns {{data: unknown, setLoading: React.Dispatch<React.SetStateAction<boolean>>, loading: boolean, error: boolean}}
 */
const useFetch = ({ method, params, url }, values = {}) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const begin = async () => {
      const config = {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "josep-is-the-best-programmer-out-there",
        },
      };

      if (method === "GET") {
        for (let param of params) {
          url = url.replace("{" + param + "}", values[param]);
        }
      }

      if (method === "POST") {
        config.body = JSON.stringify(values);
      }
      console.log(url, config);
      return fetch(url, config).then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Error while fetching data");
      });
    };

    if (loading) {
      begin()
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch(() => setError(true));
    }
  }, [loading]);

  return { data, loading, error, setLoading };
};

export default useFetch;
