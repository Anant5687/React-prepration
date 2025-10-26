import React from 'react';
import Message from './message';
import useIntersection from '../../hooks/useIntersection';

const ChatRoom = ({ messages }) => {
//   const [messageRef, isInerSecting] = useIntersection({
//     // rootMargin: '0px',
//     // scrollMargin: '0px',
//     threshold: 0.1,
//   });
  return (
    <div
      style={{
        height: '30vh',
        width: '50vw',
        overflowY: 'auto',
        border: '1px solid black',
        borderRadius: '8px',
        padding: '12px',
      }}
    >
      {messages?.map((message) => (
        <Message
          key={message?.id}
          data={message}
        //   ref={messageRef}
        //   isInerSecting={isInerSecting}
        />
      ))}
    </div>
  );
};

export default React.memo(ChatRoom);
