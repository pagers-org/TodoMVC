import TodoItem from './TodoItem';

interface Props {
  handleItemCheck: (id: number) => void;
  handleItemClick: (id: number) => void;
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const { todos, handleItemCheck, handleItemClick } = props;
  
  return (
    <div className='todo-list'>
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <TodoItem 
            todo={todo} 
            key={id} 
            handleItemCheck={handleItemCheck} 
            handleItemClick={handleItemClick} 
          />)
      })}
      
    </div>
  )
}

export default TodoList
