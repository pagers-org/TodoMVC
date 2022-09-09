import { createContext, Dispatch, ReactNode, useContext, useMemo, useState } from 'react'
import { nanoid } from 'nanoid';

interface Props {
  children: ReactNode
}

const TodosValueContext = createContext<Todo[]>([]);
const TodosActionContext = createContext<any>(() => {});

const TodosProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const actions = useMemo(
    () => ({
      add({ content } : { content: string} ) {
        if(content.length === 0) return
        const newTodo: Todo = {
          id: nanoid(),
          content,
          isCompleted: false,
        }
        setTodos([newTodo, ...todos])
      },
      toggle(selectedId: string) {

      },
      remove(selectedId: string) {

      }
    }),
    []
  )

  return (
    <TodosActionContext.Provider value={actions}>
      <TodosValueContext.Provider value={todos}>
        {children}
      </TodosValueContext.Provider>
    </TodosActionContext.Provider>
  )
}

export default TodosProvider
