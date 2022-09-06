import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Footer from './components/Footer';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

type FilterType = 'All' | 'Active' | 'Completed' 


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
].reverse()
  const [state, setState] = useState<Todo[]>(initialState);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('All');
  
  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: state.length === 0 ? 1 : state[0].id + 1,
      content: content,
      isCompleted: false,
    }
    console.log(newTodo);
    setState([newTodo, ...state])
    setContent('');
  }

  const handleItemCheck = (selectedId: number) => {
    const newState = [...state];
    const selectedIndex = newState.findIndex(({id}) => id === selectedId)
    newState[selectedIndex].isCompleted = !newState[selectedIndex].isCompleted;
    setState([...newState]); 
  }

  const handleItemClick = (selectedId: number) => {
    const newState = [...state];
    const selectedIndex = newState.findIndex(({id}) => id === selectedId)
    newState.splice(selectedIndex, 1)
    setState([...newState])
  }

  useEffect(() => {
    setTodos(state.filter(({isCompleted}) => {
      if(filterType === 'Active'){
        return isCompleted === false
      } else if(filterType === 'Completed') {
        return isCompleted === true
      } else {
        return true
      }
    }))

  }, [state, filterType])

  return (
    <>
      <header>
        <h1 className="header-text">todos</h1>
        <TodoInput handleInputSubmit={handleInputSubmit} content={content} setContent={setContent}  />
      </header>
      <section>
        <TodoList todos={todos} handleItemCheck={handleItemCheck} handleItemClick={handleItemClick} />
      </section>
      <Footer count={`${filterType} 개수 : ${todos.length} / 전체 개수 : ${state.length}`} filterType={filterType} setFilterType={setFilterType} />
    </>
  );
};

export default App;
