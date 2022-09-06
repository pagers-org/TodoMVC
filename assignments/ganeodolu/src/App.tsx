import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState, useEffect } from 'react';

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
  }
]
  const [state, setState] = useState<Todo[]>(initialState);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [content, setContent] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('All');
  
  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
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
        <TodoList todos={todos} handleItemCheck={handleItemCheck} />
      </section>
      <footer className="footer-container">
      <p className="todos-count"></p>
      <ul className="filters">
        <li
          className={filterType === 'All' ? 'all-btn active-btn-border' : 'all-btn'}
          // onClick={}
        >
          All
        </li>
        <li
          className={filterType === 'Active' ? 'active-todo-btn active-btn-border':'active-todo-btn'}
          // onClick={}
        >
          Active
        </li>
        <li
          className={filterType === 'Completed' ? 'complete-btn active-btn-border' : 'complete-btn'}
          // onClick={}
        >
          Completed
        </li>
      </ul>
    </footer>
    </>
  );
};

export default App;
