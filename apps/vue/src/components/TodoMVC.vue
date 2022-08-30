<template>
  <div>
    <section class="todoapp">
      <todo-header @addTodosList="handleAddTodo"></todo-header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="toggleAllStat" @change="handleToggleAllChange" >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="completed"  v-for="(item,index) in filterTodos" :key="item.id" :class="{editing:currentEditing === item,completed: item.completed,}">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" >
              <label @dblclick="handleGetEditingDblclick(item)">{{item.title}}</label>
              <button class="destroy" @click="handleRemoveTodoClick(index,$event)"></button>
            </div>
            <input class="edit" :value="item.title" 
            @keydown.enter="handleSaveEditKeydown(item,index,$event)"
            @blur="handleSaveEditKeydown(item,index,$event)"
            @keydown.esc="handleCancelEditEsc"
            v-todo-focus="currentEditing === item" >
          </li>
        </ul>
      </section>
      <todo-footer :todos='todos' :filterText='filterText' @changeFilterText="changeFilter"></todo-footer>
    </section>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue' 
import TodoFooter from './TodoFooter.vue' 

export default {
  name: 'TodoMVC',  
  data () {
    return {
      todos:JSON.parse(window.localStorage.getItem('todos') || '[]'),
      filterText : 'all',
      currentEditing : null
    }
  },
  computed : {
    toggleAllStat:{
      get(){
        return this.todos.every(t => t.completed)
      },
      set(){
        const checked = !this.toggleAllStat
        this.todos.forEach(item=>{
          item.completed = checked
        })
      }
    },
    filterTodos(){
      switch(this.filterText){
        case 'active' :
          return this.todos.filter(t => !t.completed)
          break
        case 'completed':
          return  this.todos.filter(t => t.completed)
        default:
          return this.todos
          break
      }
    } 
  },
  watch:{
    todos:{
      handler(val,oldVal){
        window.localStorage.setItem('todos',JSON.stringify(val))
      },
      deep:true
    }
  },
  methods : {
    handleAddTodo(addText){
      let value = addText
      let valueText = value.trim()
      if(!valueText.length){
        return
      }
      let todos = this.todos
      todos.push({
        id:todos.length ? todos[todos.length - 1].id + 1 : 1,
        title:valueText,
        completed:false
      })
    },
    handleToggleAllChange(e){
      const checked = e.target.checked
      this.todos.forEach(item=>{
        item.completed = checked
      })
    },
    handleGetEditingDblclick(todo){
      this.currentEditing = todo
    },
    handleSaveEditKeydown(todo,index,e){
				var target = e.target
				var value = target.value.trim()
        
				if (!value.length) {
					this.todos.splice(index,1)
				} else{
					todo.title = value
					this.currentEditing = null
				}
    },
    handleCancelEditEsc(){
      this.currentEditing = null
    },
    handleRemoveTodoClick(index,e){
      this.todos.splice(index,1)
    },
    changeFilter(text){
      this.filterText = text
    },
  },
  components:{
    TodoHeader,
    TodoFooter
  }
}
</script>
