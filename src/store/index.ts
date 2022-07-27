import { createStore } from "vuex";

type Task = {
  id: number;
  done: boolean;
  isEdited: boolean;
  isHidden: boolean;
  content: string;
};

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]") as Task[],
  },
  getters: {},
  mutations: {
    addNewTask({ tasks }, task: string) {
      tasks.push({
        id: tasks.length + 1,
        done: false,
        isEdited: false,
        isHidden: false,
        content: task,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    },

    removeTask({ tasks }, index: number) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },

    hideTask({ tasks }, taskId: number) {
      const currentTask = tasks.find((task) => task.id === taskId);
      if (currentTask) {
        currentTask.isHidden = true;
      }
    },

    toggleDone({ tasks }, taskId: number) {
      const currentTask = tasks.find((task) => task.id === taskId);
      if (currentTask) {
        currentTask.done = !currentTask.done;
      }
    },

    editTask({ tasks }, taskId: number) {
      const currentTask = tasks.find((task) => task.id === taskId);
      if (currentTask) {
        currentTask.isEdited = true;
      }
    },

    saveChanges({ tasks }, { taskId, value }) {
      const currentTask = tasks.find((task) => task.id === taskId);
      if (currentTask) {
        currentTask.content = value;
        currentTask.isEdited = false;
      }
    },

    showAllTasks({ tasks }) {
      tasks.forEach((task) => (task.isHidden = false));
    },
  },

  actions: {
    addNewTask({ commit }, task) {
      commit("addNewTask", task);
    },

    removeTask({ commit }, index) {
      commit("removeTask", index);
    },

    hideTask({ commit }, taskId) {
      commit("hideTask", taskId);
    },

    editTask({ commit }, taskId) {
      commit("editTask", taskId);
    },

    toggleDone({ commit }, taskId) {
      commit("toggleDone", taskId);
    },

    saveChanges({ commit }, task) {
      commit("saveChanges", task);
    },

    showAllTasks({ commit }) {
      commit("showAllTasks");
    },
  },
  modules: {},
});
