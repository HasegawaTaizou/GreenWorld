<template>
  <section id="seeds">
    <h1 class="seed__title">Solicitações de Voluntários</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>

    <ul class="seeds-content">
      <li v-for="volunteer in filteredVolunteers" :key="volunteer.id" @click="handleItemClick(volunteer)">
        <router-link to="/dashboard/volunteer-requests/volunteer-request" class="seed__item">
          <span class="filter_ball status-finished"> {{ volunteer.id }}</span>
          <span class="seed__name">{{ volunteer.nome_completo }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'
import axios from "axios";

export default {
  name: "VolunteerRequests",
  data() {
    return {
      volunteers: [],
    };
  },
  mounted() {
    this.fillAllVolunteers();
  },
  computed: {
    filteredVolunteers() {
      return this.volunteers.filter(
        (volunteer) => volunteer.id_status_cadastro === 1
      );
    },
  },
  methods: {
    fillAllVolunteers() {
      axios
        .get(`http://127.0.0.1:8080/v6/green-world/todos_voluntarios`)
        .then((response) => {
          console.log(response.data.status);
          this.volunteers = response.data.status;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleItemClick(item) {
      this.$store.state.selectedVolunteerCpf = item.cpf;
      console.log(item.cpf); // Exibe o valor do atributo 'id' do item clicado
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>