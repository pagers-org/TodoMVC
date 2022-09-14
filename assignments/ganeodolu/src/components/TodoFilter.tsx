import { useTodosActions, useTodosType } from '../context/TodosProvider';
import { FILTER_TYPE, FILTER_TYPE_ARRAY } from '../utils/constants';
import TodoCounter from './TodoCounter';

const TodoFilter = () => {
  const filterType = useTodosType();
  const { changeFilter } = useTodosActions();

  const filterTypeTable = {
    [FILTER_TYPE.ALL]: 'all-btn',
    [FILTER_TYPE.ACTIVE]: 'active-todo-btn',
    [FILTER_TYPE.COMPLETED]: 'complete-btn',
  };

  return (
    <footer className="footer-container">
      <TodoCounter />
      <ul className="filters">
        {FILTER_TYPE_ARRAY.map(filterName => {
          return (
            <li
              className={`${filterTypeTable[filterName]} ${filterName === filterType ? 'active-btn-border' : ''}`}
              onClick={() => changeFilter(filterName)}
              key={filterName}
            >
              {filterName}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default TodoFilter;
