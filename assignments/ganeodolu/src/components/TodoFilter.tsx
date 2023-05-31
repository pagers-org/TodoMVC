import { useTodosActions, useTodosType } from '../context/TodosProvider';
import { FILTER_TYPE } from '../utils/constants';
import TodoCounter from './TodoCounter';

const TodoFilter = () => {
  const filterType = useTodosType();
  const { changeFilter } = useTodosActions();
  const { ALL, ACTIVE, COMPLETED } = FILTER_TYPE;

  const buttonClass = {
    [ALL]: `all-btn ${ALL === filterType && 'active-btn-border'}`,
    [ACTIVE]: `active-todo-btn ${ACTIVE === filterType && 'active-btn-border'}`,
    [COMPLETED]: `complete-btn ${COMPLETED === filterType && 'active-btn-border'}`,
  };

  const onClickHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elementTarget = e.target as HTMLElement;
    changeFilter(elementTarget.textContent);
  };

  return (
    <footer className="footer-container">
      <TodoCounter />
      <ul className="filters">
        <li className={buttonClass[ALL]} onClick={onClickHandler}>
          {ALL}
        </li>
        <li className={buttonClass[ACTIVE]} onClick={onClickHandler}>
          {ACTIVE}
        </li>
        <li className={buttonClass[COMPLETED]} onClick={onClickHandler}>
          {COMPLETED}
        </li>
      </ul>
    </footer>
  );
};

export default TodoFilter;
