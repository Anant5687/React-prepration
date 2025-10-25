import Quiz from './components/quiz';
import EditableTodo from './components/todos/editable';
import TodoDashboard from './components/todos/todo-dashboard';
import useInterval from './hooks/useInterval';

function App() {
  console.log(useInterval(()=> console.log(""), 2000))
  return <EditableTodo />;
}

export default App;
