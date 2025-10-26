import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const prevCallback = useRef();

  useEffect(() => {
    prevCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (prevCallback.current) {
        prevCallback.current();
      }
    };

    let data = setInterval(tick, delay);

    return () => clearInterval(data);
  }, [delay]);
};

export default useInterval;
