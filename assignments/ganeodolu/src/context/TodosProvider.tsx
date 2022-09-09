import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { nanoid } from 'nanoid';

interface Props {
  children: ReactNode
}
const initialState: Todo[] = [
  {
    id: '1',
    content: '타입 추론',
    isCompleted: false,
  },
  {
    id: '2',
    content: '타입 선언',
    isCompleted: true,
  },
  {
    id: '3',
    content: '타입 설계',
    isCompleted: true,
  }
].reverse();
const TodosValueContext = createContext<Todo[]>([]);
const TodosActionsContext = createContext<any>(() => { }); // 타입 수정할 것



const TodosProvider = ({ children }: Props) => {
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

      },
      remove(selectedId: string) {

      }
    }),
    []
  )

  return (
    <TodosActionsContext.Provider value={actions}>
      <TodosValueContext.Provider value={todos}>
        {children}
      </TodosValueContext.Provider>
    </TodosActionsContext.Provider>
  )
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

export { useTodosValue, useTodosActions }

export default TodosProvider
