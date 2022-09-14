import { useTodosActions, useTodosType } from '../context/TodosProvider';
import { FILTER_TYPE } from '../utils/constants';
import TodoCounter from './TodoCounter';

const TodoFilter = () => {
  const filterType = useTodosType();
  const { changeFilter } = useTodosActions();

  const filterTypeClassNameTable = {
    [FILTER_TYPE.ALL]: `all-btn ${FILTER_TYPE.ALL === filterType && 'active-btn-border'}`,
    [FILTER_TYPE.ACTIVE]: `active-todo-btn ${FILTER_TYPE.ACTIVE === filterType && 'active-btn-border'}`,
    [FILTER_TYPE.COMPLETED]: `complete-btn ${FILTER_TYPE.COMPLETED === filterType && 'active-btn-border'}`,
  };

  return (
    <footer className="footer-container">
      <TodoCounter />
      <ul className="filters">
        <li className={filterTypeClassNameTable[FILTER_TYPE.ALL]} onClick={() => changeFilter(FILTER_TYPE.ALL)}>
          {FILTER_TYPE.ALL}
        </li>
        <li className={filterTypeClassNameTable[FILTER_TYPE.ACTIVE]} onClick={() => changeFilter(FILTER_TYPE.ACTIVE)}>
          {FILTER_TYPE.ACTIVE}
        </li>
        <li
          className={filterTypeClassNameTable[FILTER_TYPE.COMPLETED]}
          onClick={() => changeFilter(FILTER_TYPE.COMPLETED)}
        >
          {FILTER_TYPE.COMPLETED}
        </li>
      </ul>
    </footer>
  );
};

export default TodoFilter;
