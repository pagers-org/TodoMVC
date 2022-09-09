import { useState } from "react";
import { useTodosActions } from '../context/TodosProvider';

const TodoInput = () => {
  const [content, setContent] = useState('');
  const { add } = useTodosActions();

  const handleInputChange: HandleChangeEvent = (e) => {
    setContent(e.target.value);
  }

  const handleInputSubmit: HandleSubmitEvent = (e) => {
    e.preventDefault();
    if (content.length === 0) return
    add(content);
    setContent('');
  }

  return (
    <header>
      <h1 className="header-text">Todos</h1>
      <form
        className='todo-input-container'
        onSubmit={handleInputSubmit}
      >
        <input
          type='text'
          value={content}
          className='todo-input'
          placeholder='할일을 입력해주세요'
          onChange={handleInputChange}
        />
      </form>
    </header>
  )
}

export default TodoInput
