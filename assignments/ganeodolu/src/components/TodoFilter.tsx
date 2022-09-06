import TodoCounter from './TodoCounter';

type FilterType = 'All' | 'Active' | 'Completed'

interface Props {
  count: string;
  filterType: FilterType;
  setFilterType: any;
}

const TodoFilter = (props: Props) => {
  const { count, filterType, setFilterType } = props;
  
  return (
    <>
      <TodoCounter count={count} />
      <ul className="filters">
        <li
          className={filterType === 'All' ? 'all-btn active-btn-border' : 'all-btn'}
          onClick={() => setFilterType('All')}
        >
          All
        </li>
        <li
          className={filterType === 'Active' ? 'active-todo-btn active-btn-border' : 'active-todo-btn'}
          onClick={() => setFilterType('Active')}
        >
          Active
        </li>
        <li
          className={filterType === 'Completed' ? 'complete-btn active-btn-border' : 'complete-btn'}
          onClick={() => setFilterType('Completed')}
        >
          Completed
        </li>
      </ul>
    </>
  )
}

export default TodoFilter

