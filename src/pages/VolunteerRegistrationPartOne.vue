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
          <img
            :src="downloadURL"
            alt="User Photo"
            class="photo__photo"
          />
        </div>
        <div class="form__full-name-container">
          <label for="full-name" class="full-name__label">Nome completo:</label>
          <input
            type="text"
            class="full-name__input"
            id="fullName"
            maxlength="150"
            v-model="inputFullName"
          />
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
          />
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
            v-model="inputEmail"
          />
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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDofRds_OjtPBMabg4-lS82cRWdLjXA4Zk",
  authDomain: "greenworld-f2763.firebaseapp.com",
  projectId: "greenworld-f2763",
  storageBucket: "greenworld-f2763.appspot.com",
  messagingSenderId: "549856611550",
  appId: "1:549856611550:web:ca75f1092264f9d607864f",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default {
  name: "VolunteerRegistrationPartOne",
  data() {
    return {
      isSelectedImage: false,
      downloadURL: this.$store.state.formData.photo,
      inputFullName: this.$store.state.formData.fullName,
      inputDateBirth: this.$store.state.formData.dateBirth,
      inputRg: this.$store.state.formData.rg,
      inputCpf: this.$store.state.formData.cpf,
      inputPhone: this.$store.state.formData.phone,
      inputEmail: this.$store.state.formData.email,
      formData: {
        photo: "",
        fullName: "",
        dateBirth: "",
        rg: "",
        cpf: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
      const storageRef = ref(storage, "images/" + file.name);

      await uploadBytes(storageRef, file);

      this.downloadURL = await getDownloadURL(storageRef);
      
      this.isSelectedImage = true;
    },
    submitForm() {
      this.formData.photo = this.downloadURL;
      this.formData.fullName = this.inputFullName;
      this.formData.dateBirth = this.inputDateBirth;
      this.formData.rg = this.inputRg;
      this.formData.cpf = this.inputCpf;
      this.formData.phone = this.inputPhone;
      this.formData.email = this.inputEmail;
      console.log(this.formData);

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
