const TodoItem = props => {
  const { complete, text } = props.todo;
  console.log(complete);
  return (
    <div className="todo-item">
      <input onChange={props.toggleCompleted} className="toggle" type="checkbox" checked={complete} />
      <label className={complete ? 'todo-complete-label' : 'todo-text-label'}>{text}</label>
      <button onClick={props.deleteTodo} className="delete-btn">
        X
      </button>
    </div>
  );
};

export default TodoItem;
