<template>
  <form class="form" @submit.prevent="addTask()">
    <div class="form__input">
      <label class="input__label"> New Task </label>
      <input
        class="input__text"
        v-model="newTask"
        name="newTask"
        type="text"
        placeholder="Type text here"
      />
    </div>
    <button class="form_btn">Add to list</button>
    <button class="form_btn" type="button" @click="showAllTasks()">
      Show all tasks
    </button>
  </form>
</template>

<script lang="js">
import { ref } from "vue";
import './taskAddingForm.scss';

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
