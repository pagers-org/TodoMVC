import './assets/index.css'
import TodoMVC from './todo-mvc.svelte'

const app = new TodoMVC({
	target: document.querySelector('.todoapp')
});

export default app
