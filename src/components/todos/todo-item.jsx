import React from 'react';

const TodoItem = ({ ele }) => {
  return (
    <div style={{ marginTop: '10px', border: '1px solid black' , padding: '4px', borderRadius: '8px'}}>
      <p>Title : {ele?.title}</p>
      <p>Status : {String(ele?.completed)}</p>
    </div>
  );
};

export default React.memo(TodoItem);
