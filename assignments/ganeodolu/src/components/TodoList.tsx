import React from 'react'
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  handleItemCheck: any;
  handleItemClick: any;
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const { todos, handleItemCheck, handleItemClick } = props;
  return (
    <div className='todo-list'>
      {todos.map((todo) => {
        const { id } = todo;
        return <TodoItem todo={todo} key={id} handleItemCheck={handleItemCheck} handleItemClick={handleItemClick} />
      })}
      
    </div>
  )
}

export default TodoList
