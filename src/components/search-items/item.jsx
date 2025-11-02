import React from 'react';

const Item = ({ ele }) => {
  return <div>{ele}</div>;
};

export default React.memo(Item);
