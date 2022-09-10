import React from 'react';
import TodoItem from './TodoItem';
import todosManager, { Todo, TodoStatus } from './modules/todosManager';
import listRendererManager from './modules/listRendererManager';
import { ItemList } from './ItemList';

type FooterStatusButton = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const TodoList = () => {
  const { todos: todosAll, addTodo, removeTodo, toggleTodo } = todosManager();
  const { visibleStatus, getListBy, updateVisibleStatus } = listRendererManager<Todo, TodoStatus>(todosAll, 'all');

  // renderTodoItem
  const renderTodoItem = (todo: Todo) => (
    <TodoItem
      key={todo.id}
      text={todo.text}
      isCompleted={todo.status === 'completed'}
      toggleItem={() => toggleTodo(todo.id)}
      removeItem={() => removeTodo(todo.id)}
    />
  );

  // footerLeft
  const remaining = getListBy('active').length;
  const footerLeft = (
    <p className="todos-count">{remaining > 1 ? `${remaining} items left` : `${remaining} item left`}</p>
  );

  // footerRight
  const footerButtons: FooterStatusButton[] = [
    {
      text: 'All',
      isActive: visibleStatus === 'all',
      onClick: () => updateVisibleStatus('all'),
    },
    {
      text: 'Active',
      isActive: visibleStatus === 'active',
      onClick: () => updateVisibleStatus('active'),
    },
    {
      text: 'Completed',
      isActive: visibleStatus === 'completed',
      onClick: () => updateVisibleStatus('completed'),
    },
  ];

  const footerRight = (
    <ul className="filters">
      {footerButtons.map(button => (
        <li className={button.isActive ? 'all-btn active-btn-border' : 'all-btn'} onClick={button.onClick}>
          {button.text}
        </li>
      ))}
    </ul>
  );

  return (
    <ItemList
      addItem={text => addTodo(text)}
      list={getListBy(visibleStatus)}
      renderItem={renderTodoItem}
      footerLeft={footerLeft}
      footerRight={footerRight}
    />
  );
};

export default TodoList;
