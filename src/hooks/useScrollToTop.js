import { useEffect, useState } from 'react';

const useScrollToTop = () => {
  const [isBtnView, setIsBtnView] = useState(false);

  useEffect(() => {
    const getScrollSize = () => {
      setIsBtnView(window.scrollY > 100);
    };

    window.addEventListener('scroll', getScrollSize);

    return () => window.removeEventListener('scroll', getScrollSize);
  }, []);
  return isBtnView;
};

export default useScrollToTop;
