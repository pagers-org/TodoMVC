import React from 'react';

const TodoItem = ({
  text,
  isCompleted,
  toggleItem,
  removeItem,
}: {
  text: string;
  isCompleted: boolean;
  toggleItem: () => void;
  removeItem: () => void;
}) => (
  <div className="todo-item">
    <input onChange={toggleItem} className="toggle" type="checkbox" checked={isCompleted} />
    <label className={isCompleted ? 'todo-complete-label' : 'todo-text-label'}>{text}</label>
    <button onClick={removeItem} className="delete-btn">
      X
    </button>
  </div>
);

export default TodoItem;
