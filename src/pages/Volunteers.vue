<template>
  <div class="content">
    <header>
      <h1 class="volunteers__title">Voluntários</h1>
      <router-link class="return__link" to="/"
        ><img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
      /></router-link>
    </header>
    <main>
      <div class="why-contribute">
        <h2 class="why-contribute__title">Por que contribuir?</h2>
        <p class="why-contribute__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
          rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
          Curabitur commodo enim bibendum, condimentum augue id, elementum
          magna. Etiam in lacus placerat, faucibus felis sed, congue elit. Etiam
          eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et felis
          eget facilisis. In imperdiet est non eros ornare, auctor congue eros
          malesuada. Duis sollicitudin turpis sit amet mi sagittis, eu luctus
          massa posuere. Duis tincidunt dignissim rhoncus.
        </p>
        <img
          src="../assets/img/why-contribute-image.png"
          alt="How Contribute Image"
          class="why-contribute__image"
        />
      </div>
      <div class="how-contribute">
        <img
          src="../assets/img/how-contribute-image.png"
          alt="How Contribute Image"
          class="how-contribute__image"
        />
        <h2 class="how-contribute__title">Como contribuir?</h2>
        <p class="how-contribute__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
          rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
          Curabitur commodo enim bibendum, condimentum augue id, elementum
          magna. Etiam in lacus placerat, faucibus felis sed, congue elit. Etiam
          eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et felis
          eget facilisis. In imperdiet est non eros ornare, auctor congue eros
          malesuada. Duis sollicitudin turpis sit amet mi sagittis, eu luctus
          massa posuere. Duis tincidunt dignissim rhoncus.
        </p>
        <a href="#" class="how-contribute__link">
          <button class="how-contribute__button">Estou interessado</button>
        </a>
      </div>
    </main>
  </div>
  <footer>
    <p class="copyright">
      Copyright © 2023 | Todos os direitos reservados Green World
    </p>
  </footer>
</template>

<script>
export default {
  name: "Volunteers",
};
</script>

<style scoped>
@import url("../assets/css/volunteers/generalStyle.css");
@import url("../assets/css/volunteers/volunteersStyle.css");
@import url("../assets/css/volunteers/volunteersResponsiveStyle.css");
@import url("../assets/css/volunteers/footerStyle.css");
</style>
