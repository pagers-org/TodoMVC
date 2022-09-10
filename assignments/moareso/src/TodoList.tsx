import React from 'react';
import TodoItem from './TodoItem';
import todosManager, { Todo, TodoStatus } from './modules/todosManager';
import listStatusManager from './modules/listStatusManager';
import { ItemList } from './ItemList';

// Todo리스트 도메인의 의존성을 가진 Todo리스트 컴포넌트
// ItemList라는 도메인 의존성이 없는 컴포넌트에 필요한 prop을 내려 반환한다.
type FooterStatusButton = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const TodoList = () => {
  const { todos: todosAll, addTodo, removeTodo, toggleTodo } = todosManager();
  const { visibleStatus, getListBy, updateVisibleStatus } = listStatusManager<Todo, TodoStatus>(todosAll, 'all');

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
