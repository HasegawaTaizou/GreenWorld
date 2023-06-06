<template>
  <div class="content">
    <header>
      <h1 class="beneficiary-registration-part-three__title">CADASTRO BENEFICIADO</h1>
      <router-link class="return__link" to="/beneficiary-registration-part-two">
        <img src="../assets/img/return-icon.png" alt="Return Icon" class="return__icon" />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/beneficiary-registration-image.png"
        alt="Volunteer Registration Image"
        class="volunteer-registration__image"
      />
      <form class="beneficiary-registration-part-three-form">
        <div class="form__amount-residents-container">
          <label for="amount-residents" class="amount-residents__label">Quantidade de moradores:</label>
          <input
            type="text"
            class="amount-residents__input"
            v-mask="'###'"
            v-model="inputAmountResidents"
          />
        </div>
        <div class="form__per-capita-income-container">
          <label for="per-capita-income" class="per-capita-income__label">Renda familiar:</label>
          <input type="text" class="per-capita-income__input" v-model="inputFamilyIncome" />
        </div>
        <div class="form__type-residence-container">
          <label for="type-residence" class="type-residence__label">Tipo de residência:</label>
          <select class="type-residence__select" v-model="selectTypeResidence">
            <option class="type-residence__default" value>Selecione o tipo de residência</option>
            <option class="type-residence__option" value="Casa">Casa</option>
            <option class="type-residence__option" value="Fazenda">Fazenda</option>
          </select>
        </div>
        <div class="form__square-meters-residence-container">
          <label
            for="square-meters-residence"
            class="square-meters-residence__label"
          >Metros quadrados da residência:</label>
          <input
            type="text"
            class="square-meters-residence__input"
            v-model="inputSquareMetersResidence"
          />
        </div>
        <div class="form__comments-container">
          <label for="comments" class="comments__label">Observações:</label>
          <textarea
            name="comments"
            id
            cols="30"
            rows="10"
            class="comments__textarea"
            v-model="textareaComments"
          ></textarea>
        </div>
        <router-link to="/beneficiary-registration-part-two">
          <button type="button" class="beneficiary-registration__button-return">Voltar</button>
        </router-link>
        <button type="button" @click="submitForm" class="beneficiary-registration__button">Continuar</button>
      </form>
    </main>
    <footer>
      <p class="footer__text">Copyright © 2023 | Todos os direitos reservados Green World</p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BeneficiaryRegistrationPartThree",
  data() {
    return {
      inputAmountResidents: "",
      inputFamilyIncome: "",
      selectTypeResidence: "",
      inputSquareMetersResidence: "",
      textareaComments: "",
      formData: {
        amountResidents: "",
        familyIncome: "",
        typeResidence: "",
        squareMetersResidence: "",
        comments: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.formData.amountResidents = this.inputAmountResidents;
      this.formData.familyIncome = this.inputFamilyIncome;
      this.formData.typeResidence = this.selectTypeResidence;
      this.formData.squareMetersResidence = this.inputSquareMetersResidence;
      this.formData.comments = this.textareaComments;

      console.log("form 3: ", this.formData);

      this.$store.commit("updateFormData", this.formData);

      // Enviar dados para o servidor
      axios
        .post("http://seuservidor.com/endpoint", this.formData)
        .then(response => {
          // Manipular a resposta do servidor
          console.log(response.data);

          // Limpar dados do formulário ou reiniciar o cadastro
          this.formData.address = "";

          // Redirecionar para a primeira tela do cadastro
          this.$router.push("/");
        })
        .catch(error => {
          // Tratar erros na requisição
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/beneficiaryRegistrationPartThree/generalStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/beneficiaryRegistrationPartThreeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/beneficiaryRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartThree/copyrightResponsiveStyle.css");
</style>
