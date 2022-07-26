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
  },
  actions: {
    addNewTask({ commit }, task) {
      commit("addNewTask", task);
    },
    removeTask({ commit }, index) {
      commit("removeTask", index);
    },
  },
  modules: {},
});
