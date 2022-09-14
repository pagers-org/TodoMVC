import { useRef } from 'react';
import { useTodosActions } from '../context/TodosProvider';

type HandleSubmitEvent = (e: React.SyntheticEvent<HTMLFormElement>) => void;

const TodoInput = () => {
  const inputValueRef = useRef<HTMLInputElement>(null);
  const { add } = useTodosActions();

  const handleInputSubmit: HandleSubmitEvent = e => {
    e.preventDefault();
    if (inputValueRef.current) {
      const inputValue = inputValueRef.current.value;
      if (inputValue.length === 0) return;
      add(inputValue);
      inputValueRef.current.value = '';
    }
  };

  return (
    <header>
      <h1 className="header-text">Todos</h1>
      <form name="todoInputContainer" className="todo-input-container" onSubmit={handleInputSubmit}>
        <input
          ref={inputValueRef}
          type="text"
          name="todoInput"
          className="todo-input"
          placeholder="할일을 입력해주세요"
        />
      </form>
    </header>
  );
};

export default TodoInput;
