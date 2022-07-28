<template>
  <button class="btn" :style="fontSize" @click="clickHandler()">
    {{ btnName }}
  </button>
</template>

<script lang="js">
import './button.scss';

export default {
  props: ['btnName', 'textSize'],
  emits: ['clickHandler'],

  setup(props, { emit }) {

    const fontSize = `font-size: ${props.textSize}px`;


    const clickHandler = () => {
      emit("clickHandler")
    }
    return { fontSize, clickHandler }
  }
}
</script>
