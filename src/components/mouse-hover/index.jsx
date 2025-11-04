import { useState } from 'react';

const MouseHover = () => {
  const [coordinate, setCoordinate] = useState({ X: 0, Y: 0 });

  const onMouseMoveHandeler = (e) => {
    setTimeout(() => {
      setCoordinate({ X: e.clientX, Y: e.clientY });
    }, 100);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#FFFFFF',
      }}
      onMouseMove={onMouseMoveHandeler}
    >
      <div
        style={{
          position: 'absolute',
          top: `${coordinate.Y}px`,
          left: `${coordinate.X}px`,
          background: '#000000',
          height: '50px',
          width: '50px',
          borderRadius: '50px',
          cursor: 'grab',
        }}
      ></div>
    </div>
  );
};

export default MouseHover;
