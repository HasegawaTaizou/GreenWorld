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
      <div class="seed-content">
        <div class="help-content__image">
          <input type="file" class="photo__label" id="photo" />
          <label for="photo">
            <img src="../assets/img/add_image.png" alt="Photo Icon" class="photo__icon" />
          </label>
        </div>

        <div class="seed-content__tag-name">
          <span class="seed-content__tag">Ajuda</span>
          <h1 class="seed__title">AJUDA 01 - 01/03/2023</h1>

          <ul class="personal-data__list">
            <li class="personal-data">
              <span class="personal-data__type">Beneficiado:</span>
              <span class="personal-data__data">Carlos Santana</span>
              <router-link class="help-content__link" to="/beneficiarie">
                <i class="fa-regular fa-clipboard"></i>
              </router-link>
            </li>
            <li class="personal-data">
              <span class="personal-data__type">Envolvidos:</span>
              <div class="volunteers-lis">
                <div class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </div>
                <div class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </div>
                <div class="volunteer">
                  <span class="personal-data__data">Débora Almeida</span>
                  <router-link class="help-content__link" to="/volunteer">
                    <i class="fa-regular fa-clipboard"></i>
                  </router-link>
                </div>

              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="seed-information">


        <div class="seed-information__content-data">
          <h2 class="seed-information__title">Contato</h2>
          <div class="seed-information__data">
            <span class="seed-information__data_question">Telefone:</span>
            <span class="seed-information__data_result">(11) 95343-8228</span>
          </div>
          <div class="seed-information__data">
            <span class="seed-information__data_question">E-mail:</span>
            <span class="seed-information__data_result">mabel.santos@gmail.com</span>
          </div>
        </div>

        <div class="content-buttons">
          <router-link class="update-data__link" to="/update-administrator">
            <button class="update-data__button">Atualizar dados</button>
          </router-link>
          <button class="delete__button">Excluir</button>
        </div>

      </div>

    </section>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Help",
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
@import url("../assets/css/help/helpStyle.css");
@import url("../assets/css/variables.css");
@import url("../assets/css/reset.css");
@import url("../assets/css/generalStyle.css");
</style>