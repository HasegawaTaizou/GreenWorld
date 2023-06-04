<template>
  <div class="content">
    <header>
      <h1 class="volunteer-registration-part-two__title">
        CADASTRO VOLUNTÁRIO
      </h1>
      <router-link class="return__link" to="/volunteer-registration-part-one">
        <img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
        />
      </router-link>
    </header>
    <main>
      <img
        src="../assets/img/volunteer-registration-image.png"
        alt="Volunteer Registration Image"
        class="volunteer-registration__image"
      />
      <form class="volunteer-registration-part-two-form">
        <div class="form__cep-container">
          <label for="cep" class="cep__label">CEP:</label>
          <input
            type="text"
            class="cep__input"
            id="cep"
            v-mask="'#####-###'"
            v-model="formData.cep"
          />
        </div>
        <div class="form__road-container">
          <label for="road" class="road__label">Rua:</label>
          <input type="text" class="road__input" readonly />
        </div>
        <div class="form__neighborhood-container">
          <label for="neighborhood" class="neighborhood__label">Bairro:</label>
          <input type="text" class="neighborhood__input" readonly />
        </div>
        <div class="form__complement-container">
          <label for="complement" class="complement__label">Complemento:</label>
          <input type="text" class="complement__input" readonly />
        </div>
        <div class="form__state-container">
          <label for="state" class="state__label">Estado:</label>
          <input type="text" class="state__input" readonly />
        </div>
        <div class="form__city-container">
          <label for="city" class="city__label">Cidade:</label>
          <input type="text" class="city__input" readonly />
        </div>
        <button
          type="button"
          @click="submitForm"
          class="volunteer-registration__button"
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
  name: "VolunteerRegistrationPartOne",
  data() {
    return {
      formData: {
        cep: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$store.commit("updateFormData", this.formData);
      this.$router.push("/volunteer-registration-part-three");
      console.log("formData Vue 2: ", formData);
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/volunteerRegistrationPartTwo/generalStyle.css");
@import url("../assets/css/volunteerRegistrationPartTwo/limitsSizeStyle.css");
@import url("../assets/css/volunteerRegistrationPartTwo/volunteerRegistrationPartTwoStyle.css");
@import url("../assets/css/volunteerRegistrationPartTwo/volunteerRegistrationPartTwoResponsiveStyle.css");
@import url("../assets/css/volunteerRegistrationPartTwo/copyrightStyle.css");
@import url("../assets/css/volunteerRegistrationPartTwo/copyrightResponsiveStyle.css");
</style>
