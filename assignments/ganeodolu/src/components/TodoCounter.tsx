import { useTodosValue } from '../context/TodosProvider';

const TodoCounter = () => {
  const todos = useTodosValue();

  return (
    <p className="todos-count">{`미완료 : ${todos.filter((todo) => !todo.isCompleted).length} 개 / 전체 : ${todos.length} 개`}</p>
  )
}

export default TodoCounter
