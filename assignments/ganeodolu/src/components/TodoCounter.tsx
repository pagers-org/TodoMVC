import React from 'react'

interface Props {
  count: string; 
}

const TodoCounter = (props: Props) => {
  const { count } = props;

  return (
    <p className="todos-count">{count}</p>
  )
}

export default TodoCounter
