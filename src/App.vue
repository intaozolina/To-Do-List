<template>
  <h1>To Do List</h1>
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
import { ref } from "vue";
import TaskAddingForm from "@/components/TaskAddingForm/TaskAddingForm";
import SingleTask from "@/components/SingleTask/SingleTask";

export default {
  components: { SingleTask, TaskAddingForm },
  setup() {

const tasks = ref([]);

const addNewTask = (newTask) => {
  tasks.value.push({
    id: tasks.value.length+1,
    done: false,
    isEdited: false,
    isHidden: false,
    content: newTask });
};

const showAllTasks = () => {
  tasks.value.forEach((task) => task.isHidden = false)
}
const toggleDone = (task) => {
  task.done = !task.done;
};

const removeTask = (index) => {
  tasks.value.splice(index,1)
}

    const editTask = (task) => {
     task.isEdited = true;
     console.log(task.isEdited)
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
.done {
  text-decoration: line-through;
}
</style>
