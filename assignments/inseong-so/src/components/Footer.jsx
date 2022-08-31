const Footer = props => {
  const { remaining, activeTodo, updateTodoToShow } = props;
  return (
    <footer className="footer-container">
      <p className="todos-count">{remaining !== 1 ? `${remaining} items left` : `${remaining} item left`}</p>
      <ul className="filters">
        <li
          className={activeTodo === 'allButton' ? 'all-btn active-btn-border' : 'all-btn'}
          onClick={() => updateTodoToShow('all', 'allButton')}
        >
          All
        </li>
        <li
          className={activeTodo === 'activeButton' ? 'active-todo-btn active-btn-border' : 'active-todo-btn'}
          onClick={() => updateTodoToShow('active', 'activeButton')}
        >
          Active
        </li>
        <li
          className={activeTodo === 'completeButton' ? 'complete-btn active-btn-border' : 'complete-btn'}
          onClick={() => updateTodoToShow('complete', 'completeButton')}
        >
          Completed
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
