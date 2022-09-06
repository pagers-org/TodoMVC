import React from 'react'
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[]
}

const TodoList = (props: Props) => {
  const { todos } = props;
  return (
    <div className='todo-list'>
      {todos.map((todo, idx) => {
        return <TodoItem todo={todo} key={idx} />
      })}
      
    </div>
  )
}

export default TodoList
