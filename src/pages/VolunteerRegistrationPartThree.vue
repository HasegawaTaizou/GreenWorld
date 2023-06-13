<template>
  <div class="content">
    <header>
      <h1 class="volunteer-registration-part-three__title">
        CADASTRO VOLUNTÁRIO
      </h1>
      <router-link class="return__link" to="/volunteer-registration-part-two">
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
      <form class="volunteer-registration-part-three-form">
        <div class="form__reason-container">
          <label for="reason" class="reason__label">Motivo:</label>
          <textarea
            name="reason"
            id
            cols="30"
            rows="10"
            class="reason__textarea"
            v-model="inputReason"
          ></textarea>
        </div>
        <div class="form__have-experience-container">
          <label for="have-experience" class="have-experience__label"
            >Tenho experiência:</label
          >
          <select
            class="have-experience__select"
            v-model="selectHaveExperience"
          >
            <option class="have-experience__default" value>
              Selecione o tempo de experiência
            </option>
            <option class="have-experiencie__option" value="Menos de 1 ano">
              Menos de 1 ano
            </option>
            <option class="have-experiencie__option" value="Entre 1 a 5 anos">
              Entre 1 a 5 anos
            </option>
            <option class="have-experiencie__option" value="Entre 5 a 20 anos">
              Entre 5 a 20 anos
            </option>
            <option class="have-experiencie__option" value="Mais de 20 anos">
              Mais de 20 anos
            </option>
          </select>
        </div>
        <router-link to="/volunteer-registration-part-two">
          <button type="button" class="volunteer-registration__button-return">
            Voltar
          </button>
        </router-link>
        <button
          type="button"
          @click="submitFormVolunteerPartThree"
          class="volunteer-registration__button"
        >
          Continuar
        </button>
        <NotificationBar v-if="showNotification" :message="notificationMessage" />
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
import submitFormVolunteerPartThree from "../assets/js/methods/submit-form-volunteer-part-three.js";
import dataFormPartThree from "../assets/js/data/data-form-part-three.js";
import NotificationBar from '../assets/components/NotificationBar.vue'

export default {
  name: "VolunteerRegistrationPartThree",
  data() {
    const formData = this.$store.state.formData;
    const data = dataFormPartThree(formData);
    return {
      ...data,
    };
  },
  components: {
    NotificationBar
  },
  methods: {
    submitFormVolunteerPartThree,
  },
};
</script>

<style scoped>
@import url("../assets/css/volunteerRegistrationPartThree/generalStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/volunteerRegistrationPartThreeStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/volunteerRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/copyrightResponsiveStyle.css");
</style>
