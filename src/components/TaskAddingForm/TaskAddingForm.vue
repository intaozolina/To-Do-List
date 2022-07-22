<template>
  <form @submit.prevent="addTask()">
    <label>
      New Task
      <input v-model="newTask" name="newTask" type="text" />
    </label>
    <button>Add to list</button>
    <button type="button" @click="showAllTasks()">Show all tasks</button>
  </form>
</template>

<script lang="js">
import { ref } from "vue";

export default {
  emits: ['addNewTask', 'showAllTasks'],
  setup (props, { emit }) {
    const newTask = ref('');

    const addTask = () => {
      emit('addNewTask', newTask.value);
      newTask.value = '';
    };

    const showAllTasks = () => {
    emit('showAllTasks')
    }

    return {newTask, addTask, showAllTasks}
  }
}
</script>
