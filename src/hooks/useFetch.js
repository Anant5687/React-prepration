import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  const fetchData = async ({ signal }) => {
    setLoading(true);

    try {
      const fetchData = await fetch(url, { signal });
      const jsonRes = await fetchData.json();
      setData(jsonRes);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (url) {
      fetchData(signal);
    }

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
