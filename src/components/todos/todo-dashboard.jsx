import React, { useEffect, useMemo, useReducer } from 'react';
import TodoItem from './todo-item';

const initialData = {
  data: [],
  loader: false,
  counter: 0,
  taskStatus: 'all',
};

const Btn = ({ btnName, onClick }) => (
  <button onClick={onClick}>{btnName}</button>
);

const TodoDashboard = () => {
  function reducer(state, action) {
    switch (action?.type) {
      case 'counter':
        return {
          ...state,
          counter: (state.counter += 1),
        };
      case 'loader':
        return {
          ...state,
          loader: action?.value,
        };
      case 'task':
        return {
          ...state,
          taskStatus: action?.value,
        };
      case 'res':
        return {
          ...state,
          data: action?.value,
        };
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialData);

  const fetchTodo = async () => {
    dispatch({ type: 'loader', value: true });
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonRes = await res?.json();
    dispatch({ type: 'res', value: jsonRes });
    dispatch({ type: 'loader', value: false });
  };

  const filteredData = useMemo(() => {
    if (state?.taskStatus === 'false' || state?.taskStatus === 'true') {
      const newData = [...state?.data]?.filter(
        (ele) => String(ele?.completed) === state?.taskStatus
      );

      return newData;
    } else {
      return state?.data;
    }
  }, [state?.taskStatus, state?.data]);

  useEffect(() => {
    fetchTodo();
  }, []);

  if (state?.loader) {
    return <p style={{ padding: '16px' }}>Loading...</p>;
  }

  return (
    <div style={{ padding: '16px' }}>
        
      <Btn
        btnName={'Filter All'}
        onClick={() => dispatch({ type: 'task', value: 'all' })}
      />
      <Btn
        btnName={'Filter uncompleted'}
        onClick={() => dispatch({ type: 'task', value: 'false' })}
      />
      <Btn
        btnName={'Filter completed'}
        onClick={() => dispatch({ type: 'task', value: 'true' })}
      />
      <Btn
        btnName={' Increase counter'}
        onClick={() => dispatch({ type: 'counter' })}
      />

      <span>{state?.counter}</span>
      {filteredData?.map((ele, i) => (
        <TodoItem key={i} ele={ele} />
      ))}
    </div>
  );
};

export default React.memo(TodoDashboard);
