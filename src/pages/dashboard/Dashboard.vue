<template>
  <header :class="{ none: this.showSidenav }">
    <nav>
      <img
        @click="this.showSidenav = true"
        src="../../assets/img/menu_image.png"
        alt="Menu"
      />
    </nav>
    <div class="container-image-log-out">
      <img
        src="../../assets/img/profile_administrator.png"
        alt="Image profile"
      />
      <a href="#" class="log-out-content">
        <button class="log-out__button">
          <img src="../../assets/img/logout_image.png" alt="Image log out" />
          <span class="log-out__text">Log out</span>
        </button>
      </a>
    </div>
  </header>
  <main>
    <div class="side-nav" :class="{ grid: this.showSidenav }">
      <a href="#" class="close__button">
        <img
          src="../../assets/img/close_icon.png"
          alt="Close"
          @click="this.showSidenav = false"
        />
      </a>
      <div class="profile-administrator-content">
        <a href="#">
          <img
            class="profile_administrator__image"
            src="../../assets/img/profile_administrator.png"
            alt="admin profile picture"
          />
          <span class="profile_administrator__name">Mabel Santos</span>
        </a>
      </div>
      <nav class="navigation">
        <ul class="navigation-fields-content">
          <li class="navigation-field">
            <a href="#">
              <img src="../../assets/img/home_icon.png" alt="Image home" />
              <span class="navigation-field__name">Home</span>
            </a>
          </li>
          <li class="navigation-field">
            <a href="#">
              <img src="../../assets/img/helps_icon.png" alt="Image list" />
              <span class="navigation-field__name">Ajudas</span>
            </a>
          </li>
          <li class="navigation-field">
            <a href="#">
              <img
                src="../../assets/img/volunteer-beneficiarie_icon.png"
                alt="Image people"
              />
              <span class="navigation-field__name">Voluntários</span>
            </a>
          </li>
          <li class="navigation-field">
            <a href="#">
              <img src="../../assets/img/home_icon.png" alt="Image home" />
              <span class="navigation-field__name">Beneficiados</span>
            </a>
          </li>
          <li class="navigation-field">
            <a href="#">
              <img src="../../assets/img/seeds_icon.png" alt="Image home" />
              <span class="navigation-field__name">Sementes</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="log-out-content">
        <a href="#" class="log-out-content">
          <button class="log-out__button">
            <img src="../../assets/img/logout_image.png" alt="Image log out" />
            <span class="log-out__text">Log out</span>
          </button>
        </a>
      </div>
    </div>
    <div class="dashboard-content">
      <img
        class="welcome__image"
        src="../../assets/img/welcome_image.png"
        alt="Welcome"
      />
      <h1 class="welcome__title">Bem vindo</h1>
    </div>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      showSidenav: false,
    };
  },
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/home/homeStyle.css");
@import url("../../assets/css/dashboard/sidenav.css");
</style>