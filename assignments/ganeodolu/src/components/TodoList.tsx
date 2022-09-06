import React from 'react'
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  handleItemCheck: any;
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const { todos, handleItemCheck } = props;
  return (
    <div className='todo-list'>
      {todos.map((todo) => {
        const { id } = todo;
        return <TodoItem todo={todo} key={id} handleItemCheck={handleItemCheck} />
      })}
      
    </div>
  )
}

export default TodoList
