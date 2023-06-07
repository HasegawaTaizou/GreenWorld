<template>
   <header>
      <nav>
        <img onclick="openNavFull" src="../assets/img/menu_image.png" alt="Menu" />
      </nav>

      <div class="container-image-log-out">
        <img src="../assets/img/profile_administrator.png" alt="Image profile" />
        <a href="#" class="log-out-content">
          <button class="log-out__button">
            <img src="../assets/img/logout_image.png" alt="Image log out" />
            <span class="log-out__text">Log out</span>
          </button>
        </a>
      </div>
    </header>
  <main>
   
    <section id="seeds">
      <h1 class="seed__title">Sementes</h1>

      <div class="search-field-content">
        <input class="search-field__input" placeholder="Pesquisar" />
        <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
      </div>


      <ul class="seeds-content">

        <li>
          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">1</span>
            <span class="seed__name">Maracujá</span>
          </router-link>
        </li>
        <li>

          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">2</span>
            <span class="seed__name">Maçã</span>
          </router-link>


        </li>
        <li><router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">3</span>
            <span class="seed__name">Tomate</span>
          </router-link>
        </li>
        <li>
          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">4</span>
            <span class="seed__name">Brócolis</span>
          </router-link>
        </li>
        <li><router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">3</span>
            <span class="seed__name">Tomate</span>
          </router-link>
        </li>
        <li>
          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">4</span>
            <span class="seed__name">Brócolis</span>
          </router-link>
        </li>
        <li><router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">3</span>
            <span class="seed__name">Tomate</span>
          </router-link>
        </li>
        <li>
          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">4</span>
            <span class="seed__name">Brócolis</span>
          </router-link>
        </li>
        <li><router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">3</span>
            <span class="seed__name">Tomate</span>
          </router-link>
        </li>
        <li>
          <router-link to="/seed" class="seed__item">
            <span class="filter_ball status-finished">4</span>
            <span class="seed__name">Brócolis</span>
          </router-link>
        </li>

      </ul>
    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Seeds",
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/reset.css");
@import url("../../assets/css/dashboard/seeds/seedsStyle.css");
</style>