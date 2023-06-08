import Vuex from "vuex";

// para acessar uma propriedade em outra tela é o comando abaixo
// console.log(this.$store.state.formData.cep);

export default new Vuex.Store({
  state: {
    formData: {
      // GENERIC DATA
      isSelectedImage: false,
      photo: "",
      fullName: "",
      dateBirth: "",
      rg: "",
      cpf: "",
      phone: "",
      email: "",
      cep: "",
      road: "",
      neighborhood: "",
      state: "",

      //VOLUNTEER DATA
      reason: "",
      haveExperience: "",

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
