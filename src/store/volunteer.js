import Vuex from "vuex";

// console.log(this.$store.state.formData.cep);

export default new Vuex.Store({
  state: {
    selectedVolunteerCpf: ""
  },
  mutations: {
    updateVolunteer(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
});
