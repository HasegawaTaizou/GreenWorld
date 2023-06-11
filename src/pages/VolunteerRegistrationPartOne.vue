<template>
  <div class="content">
    <header>
      <h1 class="volunteer-registration-part-one__title">
        CADASTRO VOLUNTÁRIO
      </h1>
      <router-link class="return__link" to="/">
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
      <form class="volunteer-registration-part-one-form">
        <div v-if="!isSelectedImage" class="form__photo-container">
          <input
            type="file"
            class="photo__label"
            id="photo"
            @change="uploadImage"
          />
          <label for="photo">
            <img
              src="../assets/img/photo-icon.png"
              alt="Photo Icon"
              class="photo__icon"
            />
          </label>
        </div>
        <div v-else class="form__photo-selected-container">
          <img :src="downloadURL" alt="User Photo" class="photo__photo" />
        </div>
        <div class="form__full-name-container">
          <label for="full-name" class="full-name__label">Nome completo:</label>
          <input
            type="text"
            class="full-name__input"
            id="fullName"
            maxlength="150"
            v-model.trim="v$.inputFullName.$model"
            :class="{ error: v$.inputFullName.$error }"
            ref="inputFullName"
            @input="filtrarTexto"
          />
          <div v-if="v$.inputFullName.$error">
            <p v-if="v$.inputFullName.required" class="error-text">
              Preencha o nome completo!
            </p>
          </div>
        </div>
        <div class="form__date-birth-container">
          <label for="date-birth" class="date-birth__label"
            >Data de nascimento:</label
          >
          <input
            type="text"
            class="date-birth__input"
            v-mask="'##/##/####'"
            v-model="inputDateBirth"
            :class="{ error: v$.inputDateBirth.$error }"
            ref="inputDateBirth"
            @input="v$.inputDateBirth.$touch()"
          />
          <div v-if="v$.inputDateBirth.$error">
            <p
              v-if="
                v$.inputDateBirth.required &&
                v$.inputDateBirth.minLength &&
                v$.inputDateBirth.validDate
              "
              class="error-text"
            >
              Preencha uma data de nascimento válida!
            </p>
          </div>
        </div>
        <div class="form__rg-container">
          <label for="rg" class="rg__label">RG:</label>
          <input
            type="text"
            class="rg__input"
            v-mask="'##.###.###-#'"
            v-model="inputRg"
          />
        </div>
        <div class="form__cpf-container">
          <label for="cpf" class="cpf__label">CPF:</label>
          <input
            type="text"
            class="cpf__input"
            v-mask="'###.###.###-##'"
            v-model="inputCpf"
          />
        </div>
        <div class="form__physical-limitation-container">
          <label for="physical-limitation" class="physical-limitation__label"
            >Limitação física:</label
          >
          <select
            class="physical-limitation__select"
            v-model="selectPhysicalLimitation"
          >
            <option class="physical-limitation__default" value>
              Selecione a limitação física
            </option>
            <option class="physical-limitation__option" value="Não tenho">
              Não tenho
            </option>
            <option class="physical-limitation__option" value="Tenho">
              Tenho
            </option>
          </select>
        </div>
        <div class="form__phone-container">
          <label for="phone" class="phone__label">Telefone:</label>
          <input
            type="text"
            class="phone__input"
            v-mask="'(##) #####-####'"
            v-model="inputPhone"
          />
        </div>
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail:</label>
          <input
            type="email"
            class="email__input"
            maxlength="256"
            v-model.trim="v$.inputEmail.$model"
            :class="{ error: v$.inputEmail.$error }"
            ref="inputEmail"
          />
          <div v-if="v$.inputEmail.$error">
            <p
              v-if="v$.inputEmail.required && v$.inputEmail.email"
              class="error-text"
            >
              Preencha o e-mail!
            </p>
          </div>
        </div>
        <button
          type="button"
          @click="submitFormVolunteerPartOne"
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
// import submitFormVolunteerPartOne from "../assets/js/methods/submit-form-volunteer-part-one.js";
import uploadImage from "../assets/js/methods/upload-image.js";
import dataPartOne from "../assets/js/data/data-form-part-one.js";

import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import axios from "axios";

export default {
  name: "VolunteerRegistrationPartOne",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    const formData = this.$store.state.formData;
    const data = dataPartOne(formData);

    return {
      validDate: true,
      ...data,
    };
  },
  validations() {
    return {
      inputFullName: { required },
      inputDateBirth: {
        required,
        minLength: minLength(10),
        validDate() {
          var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
          return regex.test(this.inputDateBirth);
        },
      },
      inputEmail: { required, email },
    };
  },
  methods: {
    uploadImage,
    async submitFormVolunteerPartOne() {
      this.formData.foto = this.downloadURL;
      this.formData.nome_completo = this.inputFullName;
      this.formData.data_nascimento = this.inputDateBirth;
      this.formData.rg = this.inputRg;
      this.formData.cpf = this.inputCpf;
      this.formData.limitacao_fisica = this.selectPhysicalLimitation;
      this.formData.telefone = this.inputPhone;
      this.formData.email = this.inputEmail;

      this.formData.cpf = this.formData.cpf
        .replace("-", "")
        .replace(".", "")
        .replace(".", "");

      console.log(this.formData);

      this.v$.$touch();

      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        this.$store.commit("updateFormData", this.formData);
        this.$router.push("/volunteer-registration-part-two");
      } else {
        const fields = [
          { key: "inputFullName", ref: "inputFullName" },
          { key: "inputDateBirth", ref: "inputDateBirth" },
          { key: "inputEmail", ref: "inputEmail" },
        ];

        for (const field of fields) {
          if (this.v$[field.key].$error) {
            this.$nextTick(() => {
              this.$refs[field.ref].focus();
            });
            break;
          }
        }
      }
    },
    filtrarTexto() {
      // Remove qualquer caractere que não seja uma letra
      this.inputFullName = this.inputFullName.replace(/[^a-zA-Z]/g, "");
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
