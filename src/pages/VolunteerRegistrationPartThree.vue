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
          ></textarea>
        </div>
        <div class="form__have-experience-container">
          <label for="have-experience" class="have-experience__label"
            >Tenho experiência:</label
          >
          <input
            type="text"
            class="have-experience__input"
            id="have-experience"
            v-model="formData.haveExperience"
          />
          <select class="have-experience__select">
            <option class="have-experience__default" value="">
              Selecione o tempo de experiência
            </option>
            <option class="have-experiencie__item" value="less_than_a_year">
              Menos de 1 ano
            </option>
            <option
              class="have-experiencie__item"
              value="between_one_to_five_years"
            >
              Entre 1 a 5 anos
            </option>
            <option
              class="have-experiencie__item"
              value="between_one_to_twenty_years"
            >
              Entre 5 a 20 anos
            </option>
            <option
              class="have-experiencie__item"
              value="more_than_twenty_years"
            >
              Mais de 20 anos
            </option>
          </select>
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
  name: "VolunteerRegistrationPartThree",
  data() {
    return {
      formData: {
        haveExperience: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.$store.commit("updateFormData", this.formData);

      // Enviar dados para o servidor
      axios
        .post("http://seuservidor.com/endpoint", this.formData)
        .then((response) => {
          // Manipular a resposta do servidor
          console.log(response.data);

          // Limpar dados do formulário ou reiniciar o cadastro
          this.formData.address = "";

          // Redirecionar para a primeira tela do cadastro
          this.$router.push("/");
        })
        .catch((error) => {
          // Tratar erros na requisição
          console.error(error);
        });
    },
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
