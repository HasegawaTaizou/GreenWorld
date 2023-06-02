import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    formData: {
      fullName: '',
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
});
