interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

type FilterType = 'All' | 'Active' | 'Completed';
