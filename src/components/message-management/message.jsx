import React from 'react';

const Message = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: data?.isMine ? 'flex-end' : 'flex-start',
        marginTop: '30px',
        width: '100%',
      }}
    >
      <p>{data?.text}</p>
    </div>
  );
};

export default Message;
