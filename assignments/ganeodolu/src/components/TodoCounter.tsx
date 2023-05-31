import { useTodosValue } from '../context/TodosProvider';

const TodoCounter = () => {
  const todos = useTodosValue();
  const uncompletedTodo = todos.filter(todo => !todo.isCompleted);

  return <p className="todos-count">{`미완료 : ${uncompletedTodo.length} 개 / 전체 : ${todos.length} 개`}</p>;
};

export default TodoCounter;
