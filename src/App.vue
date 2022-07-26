<template>
  <div class="header">
    <h1 class="header__heading">To Do List</h1>
    <img
      class="header_logo"
      src="@/assets/watercolor-flower.png"
      alt="Flower"
    />
  </div>
  <TaskAddingForm
    @addNewTask="addNewTask($event)"
    @showAllTasks="showAllTasks()"
  />
  <div v-for="(task, index) of tasks" :key="task.id">
    <SingleTask
      @toggleDone="toggleDone(task)"
      @removeTask="removeTask(index)"
      @editTask="editTask(task)"
      @hideTask="hideTask(task)"
      @saveChanges="saveChanges(task, $event)"
      :done="task.done"
      :content="task.content"
      :visible="task.isHidden"
      :isEdited="task.isEdited"
    />
  </div>
</template>

<script lang="js">
import TaskAddingForm from "@/components/TaskAddingForm/TaskAddingForm";
import SingleTask from "@/components/SingleTask/SingleTask";
import { useStore } from "vuex";

export default {
  components: { SingleTask, TaskAddingForm },
  setup() {

const store = useStore();
const tasks =  store.state.tasks;

const addNewTask = (task) => {
  store.dispatch('addNewTask', task)
};

const showAllTasks = () => {
  tasks.forEach((task) => task.isHidden = false)
}
const toggleDone = (task) => {
  task.done = !task.done;
};

const removeTask = (index) => {
  store.dispatch('removeTask', index)
}

    const editTask = (task) => {
     task.isEdited = true;
    }

    const hideTask = (task) => {
      task.isHidden = true;
    }

    const saveChanges = (task, value) => {
      task.content = value;
      task.isEdited = false;
    }

    return { tasks, addNewTask, toggleDone, removeTask, editTask, hideTask, showAllTasks, saveChanges}
  }
}
</script>

<style>
body {
  background-image: url("https://img.freepik.com/free-vector/vintage-ornamental-flowers-background_52683-28040.jpg?t=st=1658492633~exp=1658493233~hmac=195cc1091b26fd8679192183976b6c24363a104fab4acbb19a5250d5d6587188&w=1800");
}
.header {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.header__heading {
  margin-bottom: -50px;
  font-size: 45px;
  color: #535e56;
  text-shadow: 2px -2px 7px rgba(36, 41, 37, 0.63),
    12px 7px 11px rgba(170, 194, 175, 0.57);
}
.header_logo {
  padding-bottom: 20px;
}
</style>
