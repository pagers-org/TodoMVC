import { useTodosActions } from '../context/TodosProvider';

type HandleSubmitEvent = (e: React.SyntheticEvent<HTMLFormElement>) => void;

const TodoInput = () => {
  const { add } = useTodosActions();

  const handleInputSubmit: HandleSubmitEvent = e => {
    e.preventDefault();
    const todoInputValue = document.forms['todoInputContainer'].elements['todoInput'].value;
    if (todoInputValue.length === 0) return;
    add(todoInputValue);
    document.forms['todoInputContainer'].elements['todoInput'].value = '';
  };

  return (
    <header>
      <h1 className="header-text">Todos</h1>
      <form name="todoInputContainer" className="todo-input-container" onSubmit={handleInputSubmit}>
        <input type="text" name="todoInput" className="todo-input" placeholder="할일을 입력해주세요" />
      </form>
    </header>
  );
};

export default TodoInput;
