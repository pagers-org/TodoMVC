type TodoStatus = "NOT_STARTED" | "COMPLETED";

type Todo = {
  id: string;
  title: string;
  status: TodoStatus;
};

class Store {
  private todos: Todo[] = [];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  updateTodo(todo: Todo) {
    const targetIndex = this.todos.findIndex(({ id }) => id === todo.id);
    this.todos[targetIndex] = todo;
  }
  removeTodo() {}
}
