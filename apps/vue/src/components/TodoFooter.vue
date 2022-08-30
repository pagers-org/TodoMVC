<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{remaningCount}}</strong> item left</span>
    <ul class="filters">
      <li @click="tabClick('all')">
        <a :class="{selected: filterText === 'all'}" href="#/all">All</a>
      </li>
      <li @click="tabClick('active')">
        <a :class="{selected: filterText === 'active'}" href="#/active">Active</a>
      </li>
      <li @click="tabClick('completed')">
        <a :class="{selected: filterText === 'completed'}" href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-if="todos.some(item => item.completed)" 	@click="handleClearAllDoneClick">Clear completed</button>
  </footer>
</template>

<script>
export default {
  props: ['todos','filterText'],
  computed : {
    remaningCount:{
      get(){
        return this.todos.filter(t => !t.completed).length
      }
    },
  },
  methods : {
    tabClick(value) {
      this.$emit('changeFilterText',value)
    },
    handleClearAllDoneClick(){
      for(let i=0; i<this.todos.length;i++){
        if(this.todos[i].completed){
          this.todos.splice(i,1)
          i--
        }
      }
    },
  }
}
</script>