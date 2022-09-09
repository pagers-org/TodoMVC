import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import { useTodosValue, useTodosType } from '../context/TodosProvider';

const TodoList = () => {
  const todos = useTodosValue();
  const filterType = useTodosType();

  return (
    <main className='todo-list'>
      {todos.map((todo) => {
        const { id, isCompleted } = todo;

        if (filterType === 'Active') {
          return (!isCompleted && <TodoItem todo={todo} key={id} />)
        }
        if (filterType === 'Completed') {
          return (isCompleted && <TodoItem todo={todo} key={id} />)
        }
        if (filterType === 'All') {
          return (<TodoItem todo={todo} key={id} />)
        } 
      })}
      <TodoFilter />
    </main>
  )
}

export default TodoList
