import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    function checkIsOnline(event) {
      if (navigator.onLine) {
        console.log('You are currently online.');
        setIsOnline(true);
      } else {
        console.log('You are currently offline.');
        setIsOnline(false);
      }
    }

    window.addEventListener('online', checkIsOnline);
    window.addEventListener('offline', checkIsOnline);

    return () => {
      window.removeEventListener('online', checkIsOnline);
      window.removeEventListener('offline', checkIsOnline);
    };
  }, []);

  return { isOnline };
};

export default useOnlineStatus;
