import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import Axios from "axios";
import Task from "@/models/task"

Vue.use(Vuex);

export class State {
  taskList: Array<Task> = []
}

const mutations: MutationTree<State> = {
  async pushNewTask(state: State, task: Task) {
    state.taskList.push(task)
  }
}

const actions: ActionTree<State, any> = {
};

export default new Vuex.Store({
  strict: true,
  state: new State(),
  mutations: mutations,
  actions: actions,
  modules: {}
});
