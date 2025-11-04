import ImageSlider from './components/image-slider';
import InfiniteScrollDiv from './components/infinite-scroll';
import InfiniteScroll from './components/InfiniteScroll';
import MessageDashboard from './components/message-management/dashboard';
import MouseHover from './components/mouse-hover';
import NestedReply from './components/nested-reply';
import Quiz from './components/quiz';
import ScrollToTop from './components/scroll-to-top';
import SearchItem from './components/search-items';
import SuspenseUserList from './components/suspense-user-list';
import TicTacToe from './components/tic-tac-toe';
import EditableTodo from './components/todos/editable';
import TodoDashboard from './components/todos/todo-dashboard';
import VsCodeStructure from './components/vs-code-structure';
import useInterval from './hooks/useInterval';
import useOnlineStatus from './hooks/useOnlineStatus';

function App() {
  const {isOnline} = useOnlineStatus();

  console.log(isOnline)

  return <SuspenseUserList />;
}

export default App;
