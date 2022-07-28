<template>
  <button class="btn" :style="fontSize">
    {{ btnName }}
  </button>
</template>

<script lang="js">
import './button.scss';

export default {
  props: [{
    btnName: String,
    textSize: String,
}],
  emits: ['clickHandler'],

  setup(props, { emit }) {

    const btnName = this.props.btnName;

    const fontSize = () => {
      return `font-size: ${this.props.textSize}px`;
    };

    const clickHandler = () => {
      emit("clickHandler")
    }
    return { fontSize, btnName, clickHandler }
  }
}
</script>
