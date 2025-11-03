import { useState } from 'react';

const TicTacToe = () => {
  const containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selected, setSelected] = useState({});
  const [turn, setTurn] = useState('X');

  const onSelectHandler = (i) => {
    if (selected[i] || Object.keys(selected || {})?.length > 9) return;
    setSelected({ ...selected, [i]: turn });
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {containers.map((ele, i) => (
        <div
          style={{
            gridColumn: 'span 1',
            background:
              selected[i] === 'X' ? 'lightblue' : selected[i] && 'red',
            padding: '20px',
            height: '120px',
            border: '1px solid black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => onSelectHandler(i)}
          key={ele}
        >
          {selected[i] || ''}
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
