import React, { useEffect, useMemo, useReducer } from 'react';

const initialState = {
  data: [],
  loading: false,
  history: [],
  filterText: '',
};

const TodoItem = React.memo(({ ele, dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: 'edit', id: ele.id, title: e.target.value });
  };

  return (
    <>
      <br />
      <input
        value={ele?.title}
        onChange={handleChange}
        style={{ marginBottom: '5px', width: '100%' }}
      />
      <br />
    </>
  );
});

const EditableTodo = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'loading': {
        return { ...state, loading: action.data };
      }
      case 'res': {
        return { ...state, data: action.data };
      }
      case 'filter': {
        return { ...state, filterText: action.data };
      }
      case 'edit': {
        const newData = state.data.map((todo) =>
          todo.id === action.id ? { ...todo, title: action.title } : todo
        );
        console.log({newData})
        return {
          ...state,
          data: newData,
          history: [...state.history, state.data], // push previous state to history
        };
      }

      case 'undo': {
        if (state.history.length === 0) return state; // nothing to undo
        const previous = state.history[state.history.length - 1];
        console.log({previous})
        const newHistory = state.history.slice(0, -1);
        return {
          ...state,
          data: previous,
          history: newHistory,
        };
      }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const filterData = useMemo(() => {
    if (state?.filterText) {
      const newData = [...state.data]?.filter((ele) =>
        ele?.title?.toLowerCase()?.includes(state?.filterText)
      );
      return newData;
    } else return state?.data;
  }, [state?.filterText, state?.data]);

  async function fetchTodo() {
    dispatch({ type: 'loading', data: true });
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonRes = await res.json();
    dispatch({ type: 'res', data: jsonRes });
    dispatch({ type: 'loading', data: false });
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  console.log({ state });

  if (state.loading) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => dispatch({ type: 'undo' })}>Undo</button>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) =>
          dispatch({ type: 'filter', data: e.target.value.toLowerCase() })
        }
      />
      {filterData.map((todo) => (
        <TodoItem key={todo.id} ele={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default EditableTodo;
