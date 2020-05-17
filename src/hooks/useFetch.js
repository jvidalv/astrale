import React from "react";
import Sleep from "../utils/Sleep";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetch = async () => {
      return Sleep(1500);
    };

    if (loading) {
      fetch()
        .then(() => {
          setData(true);
          setLoading(false);
        })
        .catch(() => setError(true));
    }
  }, [loading]);

  return { data, loading, error, setLoading };
};

export default useFetch;
