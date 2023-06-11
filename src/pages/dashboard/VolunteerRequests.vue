<template>
  <section id="seeds">
    <h1 class="seed__title">Solicitações de Voluntários</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>

    <ul class="seeds-content">
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">1</span>
          <span class="seed__name">Marcela Alves</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">2</span>
          <span class="seed__name">Laís Ferreira</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">3</span>
          <span class="seed__name">Telma Lima</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">4</span>
          <span class="seed__name">Matheus Santos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">1</span>
          <span class="seed__name">Marcela Alves</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">2</span>
          <span class="seed__name">Laís Ferreira</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">3</span>
          <span class="seed__name">Telma Lima</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">4</span>
          <span class="seed__name">Matheus Santos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">1</span>
          <span class="seed__name">Marcela Alves</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">2</span>
          <span class="seed__name">Laís Ferreira</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">3</span>
          <span class="seed__name">Telma Lima</span>
        </router-link>
      </li>
      <li>
        <router-link to="/data-volunteer-request" class="seed__item">
          <span class="filter_ball status-finished">4</span>
          <span class="seed__name">Matheus Santos</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "VolunteerRequests",
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>