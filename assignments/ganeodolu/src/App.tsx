import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}


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
  const [content, setContent] = useState('');
  const handleInputSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: state[state.length - 1].id + 1,
      content: content,
      isCompleted: false,
    }
    setState([newTodo, ...state])
    setContent('');
  }

  return (
    <>
      <header>
        <h1 className="header-text">todos</h1>
        <TodoInput handleInputSubmit={handleInputSubmit} content={content} setContent={setContent}  />
      </header>
      <section>
        <TodoList todos={state} />
      </section>
    </>
  );
};

export default App;
