<template>
  <div class="content">
    <header>
      <h1 class="volunteer-registration-part-one__title">
        CADASTRO VOLUNTÁRIO
      </h1>
      <router-link class="return__link" to="/"
        ><img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
      /></router-link>
    </header>
    <main>
      <img
        src="../assets/img/volunteer-registration-image.png"
        alt="Volunteer Registration Image"
        class="volunteer-registration__image"
      />
      <form
        @submit.prevent="submitForm"
        class="volunteer-registration-part-one-form"
      >
        <div class="form__full-name-container">
          <label for="full-name" class="full-name__label">Nome completo:</label>
          <input
            type="text"
            class="full-name__input"
            id="full_name"
            v-model="formData.fullName"
          />
        </div>
        <div class="form__date-birth-container">
          <label for="date-birth" class="date-birth__label"
            >Data de nascimento:</label
          >
          <input type="text" class="date-birth__input" />
        </div>
        <div class="form__rg-container">
          <label for="rg" class="rg__label">RG:</label>
          <input type="text" class="rg__input" />
        </div>
        <div class="form__cpf-container">
          <label for="cpf" class="cpf__label">CPF:</label>
          <input type="text" class="cpf__input" />
        </div>
        <div class="form__phone-container">
          <label for="phone" class="phone__label">Telefone:</label>
          <input type="text" class="phone__input" />
        </div>
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input type="text" class="email__input" />
        </div>
        <button type="submit" class="volunteer-registration__button">Continuar</button>
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
        fullName: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$store.commit("updateFormData", this.formData);
      this.$router.push("/volunteer-registration-part-two");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/volunteerRegistrationPartOne/generalStyle.css");
@import url("../assets/css/volunteerRegistrationPartOne/limitsSizeStyle.css");
@import url("../assets/css/volunteerRegistrationPartOne/volunteerRegistrationPartOneStyle.css");
@import url("../assets/css/volunteerRegistrationPartOne/volunteerRegistrationPartOneResponsiveStyle.css");
@import url("../assets/css/volunteerRegistrationPartOne/copyrightStyle.css");
@import url("../assets/css/volunteerRegistrationPartOne/copyrightResponsiveStyle.css");
</style>
