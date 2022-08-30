import { createApp } from 'vue'
import router from './router'
import TodoMVC from './components/TodoMVC.vue'
import "./assets/index.css"

createApp(TodoMVC).directive('focus', {
  inserted: function (el) {
    el.focus()
  }
}).directive('todo-focus', {
  update(el, binding) {
    if (binding.value) {
      el.focus()
    }
  }
}).use(router).mount('#app')