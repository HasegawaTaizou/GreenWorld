<template>
  <header>
    <nav>
      <img
        onclick="openNavFull"
        src="../assets/img/menu_image.png"
        alt="Menu"
      />
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
    <img
      class="welcome__image"
      src="../assets/img/welcome_image.png"
      alt="Welcome"
    />
    <h1 class="welcome__title">Bem vindo</h1>
  </main>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped>
@import url("../assets/css/home/homeStyle.css");
@import url("../assets/css/variables.css");
@import url("../assets/css/reset.css");
@import url("../assets/css/generalStyle.css");
</style>