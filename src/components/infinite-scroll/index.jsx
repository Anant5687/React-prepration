import React, { useEffect, useRef, useState } from 'react';

const InfiniteScrollDiv = () => {
  const [divs, setDivs] = useState([1, 2]);
  const ref = useRef();

  useEffect(() => {
    const container = ref.current;

    const onScrollHandeler = () => {
      if (!container) return;

      const { scrollTop, clientHeight, scrollHeight } = container;

      if (clientHeight + scrollTop >= scrollHeight - 10) {
        setDivs((prev) => [...prev, prev.length + 1]);
      }
    };

    if (container) container.addEventListener('scroll', onScrollHandeler);

    return () => {
      if (container) container.removeEventListener('scroll', onScrollHandeler);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        border: '1px solid black',
        height: '90vh',
        padding: '16px',
        overflowY: 'auto',
      }}
    >
      {divs?.map((ele) => (
        <div
          ele={ele}
          style={{ border: '1px solid red', height: '80vh', marginTop: '4px' }}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrollDiv;
