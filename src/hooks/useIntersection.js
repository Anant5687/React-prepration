import React, { useEffect, useRef, useState } from 'react';

const useIntersection = (options) => {
  const [isInterSecting, setIsInetsecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observor = new IntersectionObserver(([entity]) => {
      setIsInetsecting(entity.isIntersecting);
    }, options);

    if (ref.current) {
      observor.observe(ref.current);
    }

    return () => {
      if (ref?.current) {
        observor.unobserve(ref.current);
      }
      observor.disconnect();
    };
  }, [options, ref]);

  return [ref, isInterSecting];
};

export default useIntersection;
