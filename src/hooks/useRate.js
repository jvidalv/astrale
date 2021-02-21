import * as StoreReview from 'expo-store-review';
import React from 'react';

const useRate = () => {
  const [rate, setRate] = React.useState(false);
  const [rated, setRated] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const startRate = async () => {
      if (await StoreReview.isAvailableAsync()) {
        await StoreReview.requestReview().then(() => setRated(true));
      }
      return true;
    };

    if (rate) {
      startRate().catch(() => setError(true));
    }
  }, [rate]);

  return { setRate, rated, error };
};

export default useRate;
