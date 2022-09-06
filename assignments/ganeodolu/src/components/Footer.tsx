import React from 'react'

type FilterType = 'All' | 'Active' | 'Completed' 

interface Props {
  filterType: FilterType;
  setFilterType: any;
}

const Footer = (props: Props) => {
  const { filterType, setFilterType } = props;
  return (
<footer className="footer-container">
      <p className="todos-count"></p>
      <ul className="filters">
        <li
          className={filterType === 'All' ? 'all-btn active-btn-border' : 'all-btn'}
          onClick={() => setFilterType('All')}
        >
          All
        </li>
        <li
          className={filterType === 'Active' ? 'active-todo-btn active-btn-border':'active-todo-btn'}
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
    </footer>
  )
}

export default Footer

