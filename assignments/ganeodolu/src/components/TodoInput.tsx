import { Dispatch, SetStateAction } from "react";

interface Props {
  handleInputSubmit: HandleSubmitEvent;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}

const TodoInput = (props: Props) => {
  const { handleInputSubmit, content, setContent} = props;

  const handleInputChange: HandleChangeEvent = (e) => {
    setContent(e.target.value);
  }

  return (
    <form 
      className='todo-input-container' 
      onSubmit={handleInputSubmit}
    >
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
