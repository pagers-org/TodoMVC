import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodosProvider from './context/TodosProvider';

export const App = () => {

  return (
    <TodosProvider>
      <TodoInput />
      <TodoList />
    </TodosProvider>
  );
};

export default App;
