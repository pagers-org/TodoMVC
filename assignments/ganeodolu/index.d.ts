interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

type FilterType = "All" | "Active" | "Completed";

type HandleEventId = (id: number) => void;

type HandleSubmitEvent = (e: React.SyntheticEvent<HTMLFormElement>) => void;

type HandleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;

type ButtonClassName = 'all-btn' | 'active-todo-btn' | 'complete-btn';

interface FiltersArrayType {
  typeName: FilterType,
  buttonClassName: ButtonClassName
}
