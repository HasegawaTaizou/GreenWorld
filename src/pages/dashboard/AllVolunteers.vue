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

    <section id="beneficiaries">
      <h1 class="beneficiaries__title">Todos os voluntários</h1>
      <div class="search-field-content">
        <input class="search-field__input" placeholder="Pesquisar" />
        <i class="fa-solid fa-magnifying-glass" id="search-field__icon"></i>
      </div>
      <ul class="beneficiaries-content">
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
        <li>
          <a href="#" class="beneficiarie__item">
            <div class="beneficiarie__image">
            </div>
            <span class="beneficiarie__name">Maycon Alves Almeida</span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "AllVolunteer",
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
@import url("../assets/css/beneficiaries/allBeneficiariesStyle.css");
@import url("../assets/css/variables.css");
@import url("../assets/css/reset.css");
@import url("../assets/css/generalStyle.css");
</style>