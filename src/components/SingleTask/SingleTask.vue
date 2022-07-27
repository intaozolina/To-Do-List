<template>
  <div class="task" :class="{ hidden: visible }" v-if="!isEdited">
    <p class="task__text" :class="{ done: done }" @click="toggleDone()">
      {{ content }}
    </p>
    <div class="task__buttons">
      <button class="task_btn" @click="removeTask()">Delete</button>
      <button class="task_btn" @click="editTask()">Edit</button>
      <button class="task_btn" @click="hideTask()">Hide</button>
    </div>
  </div>
  <div class="task" v-if="isEdited">
    <input class="task__input" type="text" v-model="inputValue" />
    <button class="task_btn" @click="saveChanges()">Save</button>
  </div>
</template>

<script lang="js">
import { ref } from 'vue';
import './singleTask.scss';

export default {
  props:['done', 'content', 'visible', "isEdited"],
  emits: ['toggleDone', 'removeTask', 'editTask', 'hideTask', 'saveChanges'],

  setup (props, context) {

    const inputValue = ref(props.content);

    const toggleDone = () => {
      context.emit('toggleDone');
    };

    const removeTask = () => {
    context.emit('removeTask');
  };

    const editTask = () => {
    context.emit('editTask');
  };

    const hideTask = () => {
      context.emit('hideTask');
    };

    const saveChanges = () => {
      context.emit('saveChanges', inputValue);
    };

    return {editTask, removeTask, toggleDone, hideTask, saveChanges, inputValue}
  }
}
</script>
