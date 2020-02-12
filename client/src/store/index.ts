import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';
import Axios from "axios";
import Task from "@/models/task"

Vue.use(Vuex);

class State {
}

const mutations: MutationTree<State> = {
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
