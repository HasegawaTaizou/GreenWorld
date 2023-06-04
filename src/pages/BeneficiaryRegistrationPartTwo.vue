<template>
  <div class="content">
    <header>
      <h1 class="beneficiary-registration-part-two__title">
        CADASTRO BENEFICIADO
      </h1>
      <router-link class="return__link" to="/beneficiary-registration-part-one">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/beneficiary-registration-image.png"
        alt="Volunteer Registration Image"
        class="beneficiary-registration__image"
      />
      <form class="beneficiary-registration-part-two-form">
        <div class="form__cep-container">
          <label for="cep" class="cep__label">CEP:</label>
          <input
            type="text"
            class="cep__input"
            id="cep"
            v-mask="'#####-###'"
            v-model="formData.cep"
            @blur="getData()"
            @keydown.enter="getData()"
          />
        </div>
        <div class="form__road-container">
          <label for="road" class="road__label">Rua:</label>
          <input
            type="text"
            class="road__input"
            disabled
            v-model="formData.road"
          />
        </div>
        <div class="form__neighborhood-container">
          <label for="neighborhood" class="neighborhood__label">Bairro:</label>
          <input
            type="text"
            class="neighborhood__input"
            disabled
            v-model="formData.neighborhood"
          />
        </div>
        <div class="form__complement-container">
          <label for="complement" class="complement__label">Complemento:</label>
          <input
            type="text"
            class="complement__input"
            disabled
            v-model="formData.complement"
          />
        </div>
        <div class="form__state-container">
          <label for="state" class="state__label">Estado:</label>
          <input
            type="text"
            class="state__input"
            disabled
            v-model="formData.state"
          />
        </div>
        <div class="form__city-container">
          <label for="city" class="city__label">Cidade:</label>
          <input
            type="text"
            class="city__input"
            disabled
            v-model="formData.city"
          />
        </div>
        <button
          type="button"
          @click="submitForm"
          class="beneficiary-registration__button"
        >
          Continuar
        </button>
      </form>
    </main>
    <footer>
      <p class="footer__text">
        Copyright © 2023 | Todos os direitos reservados Green World
      </p>
    </footer>
  </div>
</template>
  
  <script>
export default {
  name: "BeneficiaryRegistrationPartTwo",
  data() {
    return {
      formData: {
        cep: "",
        road: "",
        neighborhood: "",
        complement: "",
        state: "",
        city: "",
      },
    };
  },
  methods: {
    getData() {
      //Remove the "-" from CEP input
      this.formData.cep = this.formData.cep.replace("-", "");

      axios
        .get(`https://viacep.com.br/ws/${this.formData.cep}/json/`)
        .then((response) => {
          this.formData.road = response.data.logradouro;

          this.formData.neighborhood = response.data.bairro;

          this.formData.complement = response.data.complemento;

          this.formData.state = response.data.uf;

          this.formData.city = response.data.localidade;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
  
  <style scoped>
@import url("../assets/css/beneficiaryRegistrationPartTwo/generalStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/limitsSizeStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/beneficiaryRegistrationPartTwoStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/beneficiaryRegistrationPartTwoResponsiveStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/copyrightStyle.css");
@import url("../assets/css/beneficiaryRegistrationPartTwo/copyrightResponsiveStyle.css");
</style>
  