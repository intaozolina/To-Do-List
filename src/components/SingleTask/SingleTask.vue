<template>
  <div class="task" :class="{ hidden: visible }" v-if="!isEdited">
    <p class="task__text" :class="{ done: done }" @click="toggleDone()">
      {{ content }}
    </p>
    <div class="task__buttons">
      <div
        class="task__button"
        v-for="{ id, name, handler } in taskButtons"
        :key="id"
      >
        <MainButton :btnName="name" :textSize="14" @clickHandler="handler" />
      </div>
    </div>
  </div>
  <div class="task" v-else>
    <input class="task__input" type="text" v-model="inputValue" />
    <div>
      <MainButton
        :btnName="'Save'"
        :btnSize="14"
        @clickHandler="saveChanges()"
      />
    </div>
  </div>
</template>

<script lang="js">
import { ref } from 'vue';
import MainButton from "@/components/Buttons/MainButton";
import './singleTask.scss';
import '../helper.scss';

export default {
  components: { MainButton },
  props:['done', 'content', 'visible', 'isEdited'],
  emits: ['toggleDone', 'removeTask', 'editTask', 'hideTask', 'saveChanges'],

  setup (props, { emit }) {

    const inputValue = ref(props.content);
    const taskButtons = [
      {
        id:1,
        name: 'Delete',
        handler: ()=>removeTask(),
      },
      {
        id:2,
        name: 'Edit',
        handler: ()=>editTask(),
      },
      {
        id:3,
        name: 'Hide',
        handler: ()=>hideTask(),
      }
    ];

    const toggleDone = () => {
      emit('toggleDone');
    };

    const removeTask = () => {
    emit('removeTask');
  };

    const editTask = () => {
    emit('editTask');
  };

    const hideTask = () => {
      emit('hideTask');
    };

    const saveChanges = () => {
      emit('saveChanges', inputValue);
    };

    return {inputValue, taskButtons, editTask, removeTask, toggleDone, hideTask, saveChanges, }
  }
}
</script>
