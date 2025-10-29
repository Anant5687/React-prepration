import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (options) => {
  const ref = useRef();
  const [isInterSecting, setIsInterSecting] = useState(false);

  useEffect(() => {
    const observor = new IntersectionObserver(([entity]) => {
      setIsInterSecting(entity.isIntersecting);
    }, options);

    if (ref.current) {
      observor.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observor.unobserve(ref.current);
      }

      observor.disconnect();
    };
  }, [options]);

  return [ref, isInterSecting];
};

export default useInfiniteScroll;
