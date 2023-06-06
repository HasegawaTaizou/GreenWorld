<template>
  <div class="content">
    <header>
      <h1 class="volunteer-registration-part-three__title">CADASTRO VOLUNTÁRIO</h1>
      <router-link class="return__link" to="/volunteer-registration-part-two">
        <img src="../assets/img/return-icon.png" alt="Return Icon" class="return__icon" />
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
          <label for="have-experience" class="have-experience__label">Tenho experiência:</label>
          <select class="have-experience__select" v-model="selectHaveExperience">
            <option class="have-experience__default" value>Selecione o tempo de experiência</option>
            <option class="have-experiencie__option" value="Menos de 1 ano">Menos de 1 ano</option>
            <option class="have-experiencie__option" value="Entre 1 a 5 anos">Entre 1 a 5 anos</option>
            <option class="have-experiencie__option" value="Entre 5 a 20 anos">Entre 5 a 20 anos</option>
            <option class="have-experiencie__option" value="Mais de 20 anos">Mais de 20 anos</option>
          </select>
        </div>
        <router-link to="/volunteer-registration-part-two">
          <button type="button" class="volunteer-registration__button-return">Voltar</button>
        </router-link>
        <button type="button" @click="submitForm" class="volunteer-registration__button">Continuar</button>
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
  name: "VolunteerRegistrationPartThree",
  data() {
    return {
      selectHaveExperience: "",
      inputReason: "",
      formData: {
        reason: "",
        haveExperience: ""
      }
    };
  },
  methods: {
    submitForm() {
      (this.formData.reason = this.inputReason),
        (this.formData.haveExperience = this.selectHaveExperience),
        this.$store.commit("updateFormData", this.formData);

      console.log("form 3: ", this.formData);

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
@import url("../assets/css/volunteerRegistrationPartThree/generalStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/limitsSizeStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/volunteerRegistrationPartThreeStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/volunteerRegistrationPartThreeResponsiveStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/copyrightStyle.css");
@import url("../assets/css/volunteerRegistrationPartThree/copyrightResponsiveStyle.css");
</style>
