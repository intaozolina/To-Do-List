import { createStore } from "vuex";

type Task = {
  id: number;
  done: boolean;
  isEdited: boolean;
  isHidden: boolean;
  content: string;
};

const storage = (newState: Task[]) => {
  localStorage.setItem("tasksList", JSON.stringify(newState));
};
export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasksList") || "[]") as Task[],
  },
  getters: {},
  mutations: {
    addNewTask(state, task: string) {
      state.tasks = [
        ...state.tasks,
        {
          id: Math.floor(Math.random() * 10),
          done: false,
          isEdited: false,
          isHidden: false,
          content: task,
        },
      ];
      storage(state.tasks);
    },

    removeTask(state, index: number) {
      const newTasks = [...state.tasks];
      newTasks.splice(index, 1);
      state.tasks = newTasks;
      storage(state.tasks);
    },

    hideTask(state, taskId: number) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          task.isHidden = true;
        }
        return task;
      });
      storage(state.tasks);
    },

    toggleDone(state, taskId: number) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          task.done = !task.done;
        }
        return task;
      });
      storage(state.tasks);
    },

    editTask(state, taskId: number) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          task.isEdited = true;
        }
        return task;
      });
      storage(state.tasks);
    },

    saveChanges(state, { taskId, value }) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          task.content = value;
          task.isEdited = false;
        }
        return task;
      });
      storage(state.tasks);
    },

    showAllTasks(state) {
      state.tasks = state.tasks.map((task) => {
        task.isHidden = false;
        return task;
      });
      storage(state.tasks);
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
