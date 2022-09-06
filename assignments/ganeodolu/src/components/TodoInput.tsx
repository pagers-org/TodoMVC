import React, { useState } from 'react'

interface Props {
  handleInputSubmit: any,
  content: string,
  setContent: any
}

const TodoInput = (props: Props) => {
  const { content, setContent} = props;
  const { handleInputSubmit} = props;

  const handleInputChange = (e: any) => {
    setContent(e.target.value);
  }

  return (
    <form className='todo-input-container' onSubmit={handleInputSubmit}>
      <input 
        type='text'
        value={content}
        className='todo-input' 
        placeholder='할일을 입력해주세요'
        onChange={handleInputChange} 
      />
    </form>
  )
}

export default TodoInput
