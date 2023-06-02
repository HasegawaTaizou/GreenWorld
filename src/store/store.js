import Vuex from "vuex";
import { reactive } from "vue";

export default new Vuex.Store({
  state: reactive({
    formData: {
      fullName: "",
    },
  }),
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
});
