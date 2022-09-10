import TodoCounter from './TodoCounter';
import { useTodosType, useTodosActions } from '../context/TodosProvider';

const TodoFilter = () => {
  const filterType = useTodosType();
  const { changeFilter } = useTodosActions();

  return (
    <footer className="footer-container">
      <TodoCounter />
      <ul className="filters">
        <li
          className={filterType === 'All' ? 'all-btn active-btn-border' : 'all-btn'}
          onClick={() => changeFilter('All')}
        >
          All
        </li>
        <li
          className={filterType === 'Active' ? 'active-todo-btn active-btn-border' : 'active-todo-btn'}
          onClick={() => changeFilter('Active')}
        >
          Active
        </li>
        <li
          className={filterType === 'Completed' ? 'complete-btn active-btn-border' : 'complete-btn'}
          onClick={() => changeFilter('Completed')}
        >
          Completed
        </li>
      </ul>
    </footer>
  )
}

export default TodoFilter

