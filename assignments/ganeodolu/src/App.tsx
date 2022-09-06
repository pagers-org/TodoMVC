import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFilter';

export const App = () => {
  const initialState: Todo[] = [
    {
      id: 1,
      content: 'ddd',
      isCompleted: false,
    },
    {
      id: 2,
      content: '222',
      isCompleted: true,
    },
    {
      id: 3,
      content: '333',
      isCompleted: true,
    }
  ].reverse();
  const [state, setState] = useState<Todo[]>(initialState);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('All');

  const handleInputSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (content.length === 0) return
    const newTodo = {
      id: state.length === 0 ? 1 : state[0].id + 1,
      content: content,
      isCompleted: false,
    }
    setState([newTodo, ...state])
    setContent('');
  }

  const handleItemCheck = (selectedId: number) => {
    const newState = [...state];
    const selectedIndex = newState.findIndex(({ id }) => id === selectedId)
    newState[selectedIndex].isCompleted = !newState[selectedIndex].isCompleted;
    setState([...newState]);
  }

  const handleItemClick = (selectedId: number) => {
    const newState = [...state];
    const selectedIndex = newState.findIndex(({ id }) => id === selectedId)
    newState.splice(selectedIndex, 1)
    setState([...newState])
  }

  useEffect(() => {
    setTodos(state.filter(({ isCompleted }) => {
      if (filterType === 'Active') {
        return isCompleted === false
      } else if (filterType === 'Completed') {
        return isCompleted === true
      } else {
        return true
      }
    }))

  }, [state, filterType])

  return (
    <>
      <header>
        <h1 className="header-text">Todos</h1>
        <TodoInput handleInputSubmit={handleInputSubmit} content={content} setContent={setContent} />
      </header>
      <main>
        <TodoList todos={todos} handleItemCheck={handleItemCheck} handleItemClick={handleItemClick} />
      </main>
      <footer className="footer-container">
        <TodoFilter count={`${filterType} 개수 : ${todos.length} / 전체 개수 : ${state.length}`} filterType={filterType} setFilterType={setFilterType} />
      </footer>
    </>
  );
};

export default App;
