import React, { useEffect, useLayoutEffect, useState } from 'react';

const SizeMeasureMentRenders = () => {
  const [size, setSize] = useState('');

  useLayoutEffect(() => {
    if (window?.innerWidth > 0 && window?.innerWidth <= 992) setSize('Small');
    else if (window?.innerWidth > 992 && window?.innerWidth <= 1200)
      setSize('large');
    else if (window?.innerWidth > 1200) setSize('xlarge');
  }, []);

  useEffect(() => {
    function handleChange() {
      if (window?.innerWidth > 0 && window?.innerWidth <= 992) setSize('Small');
      else if (window?.innerWidth > 992 && window?.innerWidth <= 1200)
        setSize('large');
      else if (window?.innerWidth > 1200) setSize('xlarge');
    }

    window.addEventListener('resize', handleChange);

    return () => window.removeEventListener('resize', handleChange);
  }, []);

  return <div>{size}</div>;
};

export default SizeMeasureMentRenders;
