import React from 'react'

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  handleItemCheck: any;
  handleItemClick: any;
  todo: Todo;
}

const TodoItem = (props: Props) => {
  const { todo, handleItemCheck, handleItemClick } = props;
  const { id, content, isCompleted} = todo;

  return (
      <div className='todo-item' data-id={id}>
        <input className="toggle" type="checkbox" checked={isCompleted} onChange={() => handleItemCheck(id)} />
        <label className={isCompleted ? 'todo-complete-label' : 'todo-text-label'}>{content}</label>
        <button className="delete-btn" onClick={() => handleItemClick(id)}>
          X
        </button>
      </div>
  )
}

export default TodoItem
