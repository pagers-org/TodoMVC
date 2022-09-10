const Footer = props => {
  const { remaining, todosToShow, updateTodoToShow } = props;
  return (
    <footer className="footer-container">
      <p className="todos-count">{remaining !== 1 ? `${remaining} items left` : `${remaining} item left`}</p>
      <ul className="filters">
        <li
          className={todosToShow === 'all' ? 'all-btn active-btn-border' : 'all-btn'}
          onClick={() => updateTodoToShow('all')}
        >
          All
        </li>
        <li
          className={todosToShow === 'active' ? 'active-todo-btn active-btn-border' : 'active-todo-btn'}
          onClick={() => updateTodoToShow('active')}
        >
          Active
        </li>
        <li
          className={todosToShow === 'completeButton' ? 'complete-btn active-btn-border' : 'complete-btn'}
          onClick={() => updateTodoToShow('complete')}
        >
          Completed
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
