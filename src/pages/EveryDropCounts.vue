<template>
  <header>
    <div class="food_basket_distribution_project-container">
      <h1 class="food-basket-distribution-project__title">
        DISTRIBUIÇÃO DE CESTAS BÁSICAS
      </h1>
      <router-link class="return__link" to="/"
        ><img
          src="../assets/img/return-icon.png"
          alt="Return Icon"
          class="return__icon"
      /></router-link>
    </div>
  </header>
  <main>
    <div class="project-goal limit">
      <h2 class="project-goal__title">Objetivo do projeto</h2>
      <p class="project-goal__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
        finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
        rhoncus velit porta. Etiam dapibus tempus tellus et volutpat. Curabitur
        commodo enim bibendum, condimentum augue id, elementum magna. Etiam in
        lacus placerat, faucibus felis sed, congue elit. Etiam eu lacus sit amet
        justo sagittis facilisis. Morbi tincidunt et felis eget facilisis. In
        imperdiet est non eros ornare, auctor congue eros malesuada. Duis
        sollicitudin turpis sit amet mi sagittis, eu luctus massa posuere. Duis
        tincidunt dignissim rhoncus.
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
    <div class="project-images-container">
      <div class="project-images">
        <img
          src="../assets/img/food_basket_distribution_project-image.png"
          alt="Project Image"
          class="project-image"
        />
        <img
          src="../assets/img/food_basket_distribution_project-image.png"
          alt="Project Image"
          class="project-image"
        />
        <img
          src="../assets/img/food_basket_distribution_project-image.png"
          alt="Project Image"
          class="project-image"
        />
      </div>
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
  name: "EveryDropCounts",
};
</script>

<style scoped>
@import url("../assets/css/generalStyle.css");
@import url("../assets/css/everyDropCounts/limitsSizeStyle.css");
@import url("../assets/css/everyDropCounts/everyDropCountsStyle.css");
@import url("../assets/css/everyDropCounts/everyDropCountsResponsiveStyle.css");
@import url("../assets/css/everyDropCounts/footerStyle.css");
</style>