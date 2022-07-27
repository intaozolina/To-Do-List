<template>
  <div class="header">
    <h1 class="header__heading">To Do List</h1>
  </div>
  <TaskAddingForm
    @addNewTask="addNewTask($event)"
    @showAllTasks="showAllTasks()"
  />
  <div
    class="tasks"
    v-for="({ done, content, isHidden, isEdited, id }, index) of tasks"
    :key="id"
  >
    <SingleTask
      :done="done"
      :content="content"
      :visible="isHidden"
      :isEdited="isEdited"
      @toggleDone="toggleDone(id)"
      @removeTask="removeTask(index)"
      @editTask="editTask(id)"
      @hideTask="hideTask(id)"
      @saveChanges="saveChanges(id, $event)"
    />
  </div>
</template>

<script lang="js">
import TaskAddingForm from "@/components/TaskAddingForm/TaskAddingForm";
import SingleTask from "@/components/SingleTask/SingleTask";
import { useStore } from "vuex";
import '@/components/App.scss';

export default {
  components: { SingleTask, TaskAddingForm },
  setup() {

const store = useStore();
const tasks =  store.state.tasks;

const addNewTask = (task) => {
  store.dispatch('addNewTask', task)
};

const showAllTasks = () => {
  store.dispatch('showAllTasks')
};

const toggleDone = (taskId) => {
  store.dispatch('toggleDone', taskId)
};

const removeTask = (index) => {
  store.dispatch('removeTask', index)
};

const editTask = (taskId) => {
  store.dispatch('editTask', taskId)
};

const hideTask = (taskId) => {
  store.dispatch('hideTask', taskId)
};

const saveChanges = (taskId, value) => {
  store.dispatch('saveChanges', { taskId, value })
};

return { tasks, addNewTask, toggleDone, removeTask, editTask, hideTask, showAllTasks, saveChanges}
  }
}
</script>
