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
          <!-- TESTE DE MENUUUUUUUU -->
          <li class="navigation-field" v-for="item in menuItems" :key="item.id">
            <router-link :to="`/dashboard/${item.route}`">
              <img :src="item.image" alt="Item icon" />
              <span class="navigation-field__name">{{ item.title }}</span>
            </router-link>
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
import homeIcon from "@/assets/img/home_icon.png";
import helpsIcon from "@/assets/img/helps_icon.png";
import volunteerIcon from "@/assets/img/volunteer-beneficiarie_icon.png";
import seedsIcon from "@/assets/img/seeds_icon.png";

export default {
  name: "Dashboard",
  data() {
    return {
      menuItems: [
        { id: 1, title: "Home", image: homeIcon, route: "" },
        { id: 2, title: "Ajudas", image: helpsIcon, route: "pagina1" },
        { id: 3, title: "Voluntários", image: volunteerIcon, route: "pagina1" },
        { id: 4, title: "Beneficiados", image: homeIcon, route: "pagina1" },
        { id: 5, title: "Sementes", image: seedsIcon, route: "pagina1" },
      ],
      showSidenav: false,
    };
  },
  methods: {
    toggleSubMenu(item) {
      item.showSubMenu = !item.showSubMenu;
    },
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