import { useState } from 'react';
import shortid from 'shortid';

export type TodoStatus = 'active' | 'completed';

export type Todo = {
  id: string;
  text: string;
  status: TodoStatus;
};

const getToggledStatus = (status: TodoStatus): TodoStatus => {
  switch (status) {
    case 'active':
      return 'completed';
    case 'completed':
      return 'active';
    default:
      throw Error('status의 타입이 올바르지 않습니다.');
  }
};

const todosManager = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (!text || text.length === 0) {
      throw Error('addTodo 실패. text 값이 올바르지 않습니다.');
    }
    const newTodo: Todo = {
      id: shortid.generate(),
      text: text,
      status: 'active',
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: string) => {
    if (!id || id.length === 0 || !todos.find(todo => todo.id === id)) {
      throw Error('removeTodo 실패. id 값이 올바르지 않습니다.');
    }
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  const toggleTodo = (id: string) => {
    if (!id || id.length === 0 || !todos.find(todo => todo.id === id)) {
      throw Error('toggleTodo 실패. id 값이 올바르지 않습니다.');
    }
    const nextTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: getToggledStatus(todo.status),
        };
      }
      return todo;
    });
    setTodos(nextTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export default todosManager;
