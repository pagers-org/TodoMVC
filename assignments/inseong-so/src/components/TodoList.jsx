import { Component } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import Footer from './Footer';

export default class TodoList extends Component {
  state = {
    todos: [],
    todosToShow: 'all',
    activeTodo: 'allButton',
  };

  componentDidMount() {
    localStorage.getItem('todos') &&
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos')),
      });
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
  }

  addTodo = todo => {
    const newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos,
    });
  };

  toggleCompleted = id => {
    const completedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todos: completedTodos,
    });
  };

  updateTodoToShow = (todo, activeTodo) => {
    this.setState({
      todosToShow: todo,
      activeTodo,
    });
  };

  deleteTodo = id => {
    const deletedTodo = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: deletedTodo,
    });
  };
  render() {
    let todos = [];
    const { todosToShow, activeTodo } = this.state;
    const remaining = this.state.todos.filter(todo => !todo.complete).length;
    if (todosToShow === 'all' && activeTodo === 'allButton') {
      todos = this.state.todos;
    } else if (todosToShow === 'active' && activeTodo === 'activeButton') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (todosToShow === 'complete' && activeTodo === 'completeButton') {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
      <>
        <TodoInput onSubmit={this.addTodo} />
        {this.state.todos.length > 0 && (
          <div className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                toggleCompleted={() => this.toggleCompleted(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
                todo={todo}
              />
            ))}
            <Footer updateTodoToShow={this.updateTodoToShow} remaining={remaining} activeTodo={activeTodo} />
          </div>
        )}
      </>
    );
  }
}
