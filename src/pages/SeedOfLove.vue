<template>
  <header>
      <div class="seed-of-love-container">
        <h1 class="seed-of-love__title">SEMENTE DO AMOR</h1>
        <router-link class="return__link" to="/"
        ><img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
      /></router-link>
      </div>
      <img
        src="../assets/img/seed-of-love-logo.png"
        alt="Seed of love logo"
        class="seed-of-logo__logo"
      />
    </header>
    <main>
      <div class="project-goal limit">
        <h2 class="project-goal__title">Objetivo do projeto</h2>
        <p class="project-goal__text">
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
      </div>
      <div class="how-is-possible limit">
        <h2 class="how-is-possible__title">Como é possível?</h2>
        <ul class="how-is-possible__list">
          <li class="how-is-possible__item">
            Doar produtos que não passaram no teste de vendas (produtos com a
            embalagem danificada e bons para o consumo);
          </li>
          <li class="how-is-possible__item">
            Parcerias com supermercados e empresas;
          </li>
          <li class="how-is-possible__item">
            Utilizar alimentos que são considerado sobras para criar novas
            receitas (SITE);
          </li>
          <li class="how-is-possible__item">Utilizar sobras como adubo;</li>
          <li class="how-is-possible__item">
            Ter controle da produção para não causar desperdícios e manter o
            controle de validade de alimentos.
          </li>
        </ul>
      </div>
      <div class="speeches limit">
        <h2 class="speeches__title">Palestras</h2>
        <p class="speeches__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
          finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
          rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
          Curabitur commodo enim bibendum, condimentum augue id, elementum
          magna.
        </p>
        <img
          src="../assets/img/speeches-image.png"
          alt="Speeches Image"
          class="speeches__image"
        />
      </div>
      <div class="types-of-planting-container">
        <h2 class="types-of-planting__title">Tipos de plantio</h2>
        <ul class="types-of-planting">
          <li class="type-of-planting pet-bottle">
            <span class="type-of-planting__card">
              <h3 class="type-of-planting__title">GARRAFA PET</h3>
            </span>
          </li>
          <li class="type-of-planting floor">
            <span class="type-of-planting__card">
              <h3 class="type-of-planting__title">CHÃO</h3>
            </span>
          </li>
          <li class="type-of-planting box">
            <span class="type-of-planting__card">
              <h3 class="type-of-planting__title">CAIXA</h3>
            </span>
          </li>
        </ul>
      </div>
    </main>
  <footer>
    <p class="copyright">
      Copyright © 2023 | Todos os direitos reservados Green World
    </p>
  </footer>
</template>

<script>
export default {
  name: "SeedOfLove",
};
</script>

<style scoped>
@import url("../assets/css/generalStyle.css");
@import url("../assets/css/seedOfLove/limitsSizeStyle.css");
@import url("../assets/css/seedOfLove/seedOfLoveStyle.css");
@import url("../assets/css/seedOfLove/seedOfLoveResponsiveStyle.css");
@import url("../assets/css/seedOfLove/footerStyle.css");
</style>
