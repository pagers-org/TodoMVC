import { useTodosActions } from '../context/TodosProvider';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, content, isCompleted } = todo;
  const { toggle, remove } = useTodosActions();

  return (
    <div className='todo-item'>
      <input
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggle(id)}
      />
      <label
        className={isCompleted ? 'todo-complete-label' : 'todo-text-label'}
      >
        {content}
      </label>
      <button
        className="delete-btn"
        onClick={() => remove(id)}
      >
        X
      </button>
    </div>
  )
}

export default TodoItem
