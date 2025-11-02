import ImageSlider from './components/image-slider';
import InfiniteScroll from './components/InfiniteScroll';
import MessageDashboard from './components/message-management/dashboard';
import Quiz from './components/quiz';
import SearchItem from './components/search-items';
import EditableTodo from './components/todos/editable';
import TodoDashboard from './components/todos/todo-dashboard';
import VsCodeStructure from './components/vs-code-structure';
import useInterval from './hooks/useInterval';
import useOnlineStatus from './hooks/useOnlineStatus';

function App() {
  const {isOnline} = useOnlineStatus();

  console.log(isOnline)

  return <SearchItem />;
}

export default App;
