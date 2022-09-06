import React from 'react'

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  todo: Todo
}

const TodoItem = (props: Props) => {
  const { todo } = props;
  const { id, content, isCompleted} = todo;

  return (
      <div className='todo-item'>
        <input className="toggle" type="checkbox" />
        <label>{content}</label>
        <button className="delete-btn">
          X
        </button>
      </div>
  )
}

export default TodoItem
