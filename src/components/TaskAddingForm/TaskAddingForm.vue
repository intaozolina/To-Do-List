<template>
  <form class="form" @submit.prevent="addTask()">
    <div class="form__input">
      <label class="input__label"> New Task </label>
      <input
        class="input__text"
        v-model="newTask"
        required
        name="newTask"
        type="text"
        placeholder="Type text here"
      />
    </div>
    <button class="form_btn">Add to list</button>
    <button class="form_btn" type="button" @click="showAllTasks()">
      Show all tasks
    </button>
    <MainButton
      :btnName="'Show all'"
      :textSize="'18'"
      @clickHandler="showAllTasks()"
    />
  </form>
</template>

<script lang="js">
import { ref } from "vue";
import MainButton from "@/components/Buttons/MainButton";
import './taskAddingForm.scss';

export default {
  components: { MainButton },
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
