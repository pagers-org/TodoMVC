import { Dispatch, SetStateAction } from "react";
import TodoCounter from './TodoCounter';

interface Props {
  count: string;
  filterType: FilterType;
  setFilterType: Dispatch<SetStateAction<FilterType>>;
}

const TodoFilter = (props: Props) => {
  const { count, filterType, setFilterType } = props;
  // const FiltersArray: FiltersArrayType[] = [
  //   {
  //     typeName: 'All',
  //     buttonClassName: 'all-btn',
  //   },
  //   {
  //     typeName: 'Active',
  //     buttonClassName: 'active-todo-btn',
  //   },
  //   {
  //     typeName: 'Completed',
  //     buttonClassName: 'complete-btn',
  //   }];  

  // const FilterTemplate = ({typeName, buttonClassName}: {typeName: FilterType, buttonClassName: ButtonClassName}): any => {
  //   return (
  //     <li
  //       className={filterType === typeName ? `${buttonClassName} active-btn-border` : {buttonClassName}}
  //       onClick={() => setFilterType(typeName)}
  //     >
  //       {typeName}
  //     </li>
  //   )
  // }

  // {FiltersArray.map((filter) => {
  //   const {typeName, buttonClassName} = filter;
  //   return (
  //     <li
  //       className={filterType === typeName ? `${buttonClassName} active-btn-border` : {buttonClassName}}
  //       onClick={() => setFilterType(typeName)}
  //     >
  //       {typeName}
  //     </li>
  //   )
  // })}

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

