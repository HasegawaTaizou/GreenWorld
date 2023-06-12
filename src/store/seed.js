import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    id_semente: ""
  },
  mutations: {
    updateSeed(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
});
