<template>
  <section id="seeds">
    <h1 class="seed__title">Sementes</h1>

    <div class="search-field-content">
      <input class="search-field__input" placeholder="Pesquisar" />
      <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
    </div>
    <ul class="seeds-content">
      <li v-for="seed in seeds" :key="seed.id">
        <router-link :to="`/dashboard/seeds/${seed.id}`" class="seed__item">
          <span class="filter_ball" :class="`status-${seed.status}`">{{
            seed.id
          }}</span>
          <span class="seed__name">{{ seed.name }}</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Seeds",
  data() {
    return {
      seeds: [
        { id: 1, name: "Maracujá", status: "finished" },
        { id: 2, name: "Morango", status: "finished" },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>