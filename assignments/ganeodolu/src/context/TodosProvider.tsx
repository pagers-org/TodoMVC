import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { nanoid } from 'nanoid';

interface Props {
  children: ReactNode
}

const TodosValueContext = createContext<Todo[]>([]);
const TodosTypeContext = createContext<FilterType>('All');
const TodosActionsContext = createContext<any>(() => { }); // 타입 수정할 것

const TodosProvider = ({ children }: Props) => {
  const [filterType, setFilterType] = useState<FilterType>('All');
  const [todos, setTodos] = useState<Todo[]>([]);
  const actions = useMemo(
    () => ({
      add(content: string) {
        if (content.length === 0) return
        const newTodo: Todo = {
          id: nanoid(),
          content,
          isCompleted: false,
        }
        setTodos((prevTodos: Todo[]) => [newTodo, ...prevTodos]);
      },
      toggle(selectedId: string) {
        setTodos((prevTodos: Todo[]) =>
          prevTodos.map((todo) =>
            todo.id === selectedId
              ? {
                ...todo,
                isCompleted: !todo.isCompleted
              } : todo
          ))
      },
      remove(selectedId: string) {
        setTodos((prevTodos: Todo[]) =>
          prevTodos.filter((todo) => todo.id !== selectedId)
        )
      },
      changeFilter(type: FilterType) {
        setFilterType(type)
      }
    }),
    []
  )

  return (
    <TodosActionsContext.Provider value={actions}>
      <TodosTypeContext.Provider value={filterType}>
        <TodosValueContext.Provider value={todos}>
          {children}
        </TodosValueContext.Provider>
      </TodosTypeContext.Provider>
    </TodosActionsContext.Provider>
  )
}

function useTodosType() {
  const value = useContext(TodosTypeContext);
  if (value === undefined) {
    throw new Error('useTodosType should be used within TodosProvider');
  }
  return value;
}

function useTodosValue() {
  const value = useContext(TodosValueContext);
  if (value === undefined) {
    throw new Error('useTodosValue should be used within TodosProvider');
  }
  return value;
}

function useTodosActions() {
  const value = useContext(TodosActionsContext);
  if (value === undefined) {
    throw new Error('useTodosActions should be used within TodosProvider');
  }
  return value;
}

export { useTodosValue, useTodosActions, useTodosType }

export default TodosProvider
