import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const ScrollToTop = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const isBtnView = useScrollToTop();

  const onScrollHandeler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      {data?.map((ele) => (
        <p key={ele} style={{ height: '30vh' }}>
          {ele}
        </p>
      ))}

      {isBtnView && (
        <button
          onClick={onScrollHandeler}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          Scroll To Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
