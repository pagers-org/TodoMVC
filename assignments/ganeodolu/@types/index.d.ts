interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

type FilterType = "All" | "Active" | "Completed";

type HandleSubmitEvent = (e: React.SyntheticEvent<HTMLFormElement>) => void;

type HandleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void;
