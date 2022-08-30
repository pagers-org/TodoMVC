<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-focus v-model="newTodo" @keyup.enter="handleNewTodoKeyDown">
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
 
  data(){
    return{
      newTodo:'',
    }
  },
  methods : {
    handleNewTodoKeyDown(){
      this.$emit('addTodosList',this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style scoped>

</style>