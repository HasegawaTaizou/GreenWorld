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

      // BENEFICIARY DATA
      amountResidents: "",
      familyIncome: "",
      typeResidence: "",
      squareMetersResidence: "",
      comments: "",
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
});
