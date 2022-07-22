<template>
  <div :class="{ hidden: visible }" v-if="!isEdited">
    <p :class="{ done: done }" @click="toggleDone()">
      {{ content }}
    </p>
    <button @click="removeTask()">Delete</button>
    <button @click="editTask()">Edit</button>
    <button @click="hideTask()">Hide</button>
  </div>
  <div v-if="isEdited">
    <input type="text" v-model="inputValue" />
    <button @click="saveChanges()">Save</button>
  </div>
</template>

<script lang="js">
import { ref } from 'vue';
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

<style>
.done {
  text-decoration: line-through;
}
.hidden {
  display: none;
}
</style>
