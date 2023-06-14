import Vuex from "vuex";

// para acessar uma propriedade em outra tela é o comando abaixo
// console.log(this.$store.state.formData.cep);

export default new Vuex.Store({
  state: {
    formData: {
      // GENERIC DATA
      isSelectedImage: false,
      foto: "",
      nome_completo: "",
      data_nascimento: "",
      rg: "",
      cpf: "",
      telefone: "",
      email: "",
      cep: "",
      logradouro: "",
      bairro: "",
      estado: "",
      cidade: "",

      //VOLUNTEER DATA
      limitacao_fisica: "",
      motivo: "",
      experiencia: "",

      selectedVolunteerCpf: "",

      // BENEFICIARY DATA
      amountResidents: "",
      familyIncome: "",
      typeResidence: "",
      squareMetersResidence: "",
      comments: "",

      //SEED DATA
      id_semente: "",
    },

    //NOTIFICATION
    showNotification: false,
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    updateSeed(state, payload) {
      state.formData.id_semente = payload;
    },
    updateVolunteerCpf(state, cpf) {
      state.formData.selectedVolunteerCpf = cpf;
    },
    updateNotificationStatus(state, status) {
      state.showNotification = status;
    },
    hideNotification(state) {
      state.showNotification = false;
    },
  },
});
