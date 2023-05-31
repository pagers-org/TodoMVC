import { nanoid } from 'nanoid';
import { PropsWithChildren, createContext, FunctionComponent, useContext, useMemo, useState } from 'react';

const TodosValueContext = createContext<Todo[] | undefined>(undefined);
const TodosTypeContext = createContext<FilterType>('All');
const TodosActionsContext = createContext<any | undefined>(undefined); // any 수정필요

const TodosProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [filterType, setFilterType] = useState<FilterType>('All');
  const [todos, setTodos] = useState<Todo[]>([]);
  const actions = useMemo(
    () => ({
      add(content: string) {
        if (content.length === 0) return;
        const newTodo: Todo = {
          id: nanoid(),
          content,
          isCompleted: false,
        };
        setTodos((prevTodos: Todo[]) => [newTodo, ...prevTodos]);
      },
      toggle(selectedId: string) {
        setTodos((prevTodos: Todo[]) =>
          prevTodos.map(todo =>
            todo.id === selectedId
              ? {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                }
              : todo,
          ),
        );
      },
      remove(selectedId: string) {
        setTodos((prevTodos: Todo[]) => prevTodos.filter(todo => todo.id !== selectedId));
      },
      changeFilter(type: FilterType) {
        setFilterType(type);
      },
    }),
    [],
  );

  return (
    <TodosActionsContext.Provider value={actions}>
      <TodosTypeContext.Provider value={filterType}>
        <TodosValueContext.Provider value={todos}>{children}</TodosValueContext.Provider>
      </TodosTypeContext.Provider>
    </TodosActionsContext.Provider>
  );
};

export const useTodosType = () => {
  const value = useContext(TodosTypeContext);
  if (value === undefined) {
    throw new Error('useTodosType should be used within TodosProvider');
  }
  return value;
};

export const useTodosValue = () => {
  const value = useContext(TodosValueContext);
  if (value === undefined) {
    throw new Error('useTodosValue should be used within TodosProvider');
  }
  return value;
};

export const useTodosActions = () => {
  const value = useContext(TodosActionsContext);
  if (value === undefined) {
    throw new Error('useTodosActions should be used within TodosProvider');
  }
  return value;
};

export default TodosProvider;
