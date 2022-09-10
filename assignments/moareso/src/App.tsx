import React from 'react';
import TodoList from './TodoList';

export const App = () => {
  return (
    <>
      <h1 className="header-text">todos</h1>
      <TodoList />
    </>
  );
};

export default App;
