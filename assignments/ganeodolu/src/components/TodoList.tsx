import { useTodosType, useTodosValue } from '../context/TodosProvider';
import { FILTER_TYPE } from '../utils/constants';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useTodosValue();
  const filterType = useTodosType();

  const filterTypeTable = {
    [FILTER_TYPE.ALL]: (todo: Todo) => {
      return <TodoItem todo={todo} key={todo.id} />;
    },
    [FILTER_TYPE.ACTIVE]: (todo: Todo) => {
      return !todo.isCompleted && <TodoItem todo={todo} key={todo.id} />;
    },
    [FILTER_TYPE.COMPLETED]: (todo: Todo) => {
      return todo.isCompleted && <TodoItem todo={todo} key={todo.id} />;
    },
  };

  return (
    <main className="todo-list">
      {todos.map(todo => filterTypeTable[filterType](todo))}
      <TodoFilter />
    </main>
  );
};

export default TodoList;
