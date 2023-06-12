<template>
  <section id="beneficiaries">
    <h1 class="beneficiaries__title">Todos os voluntários</h1>
    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>
    <ul class="beneficiaries-content">
      <li v-for="volunteer in volunteers" :key="volunteer.id">
        <a href="#" class="beneficiarie__item">
          <img :src="volunteer.foto" class="beneficiarie__image" />
          <span class="beneficiarie__name">{{ volunteer.nome_completo }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AllVolunteer",
  data() {
    return {
      volunteers: [],
    };
  },
  mounted() {
    this.fillAllVolunteers();
  },
  methods: {
    fillAllVolunteers() {
      axios
        .get(`http://127.0.0.1:8080/v6/green-world/todos_voluntarios`)
        .then((response) => {
          console.log(response.data.status);
          this.volunteers = response.data.status
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/beneficiaries/allBeneficiariesStyle.css");
</style>