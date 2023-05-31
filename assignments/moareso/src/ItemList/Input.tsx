import React, { useState } from 'react';

const Input = ({ onSubmit }: { onSubmit: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      onSubmit(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        autoComplete="off"
        className="todo-input"
        value={text}
        onChange={handleChange}
        name="text"
        type="text"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default Input;
