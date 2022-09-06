import TodoList from './components/TodoList';
import TodoInput from './components/TodoList';



export const App = () => {
  return (
    <>
      <h1 className="header-text">todos</h1>
      <TodoInput />
      <TodoList />
    </>
  );
};

export default App;
