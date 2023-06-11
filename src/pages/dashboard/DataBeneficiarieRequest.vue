<template>
  <header>
    <nav>
      <img onclick="openNavFull" src="./img/menu_image.png" alt="Menu" />
    </nav>

    <div class="container-image-log-out">
      <img src="./img/profile_administrator.png" alt="Image profile" />
      <a href="#" class="log-out-content">
        <button class="log-out__button">
          <img src="./img/logout_image.png" alt="Image log out" />
          <span class="log-out__text">Log out</span>
        </button>
      </a>
    </div>
  </header>
  <main>

    <div class="volunteer-content">
      <img class="volunteer__image" src="./img/beneficiarie-image.png" alt="Volunteer image">

      <div class="volunteer__tag-name-data">
        <span class="volunteer__tag">Beneficiado</span>
        <h1 class="volunteer__name">Carmen Aparecida</h1>
        <ul class="volunteer__personal-data">
          <li class="personal-data">
            <span class="uppercase personal-data__type">cpf:</span>
            <span class="personal-data__value">549.033.548-32</span>
          </li>
          <li class="personal-data">
            <span class="uppercase personal-data__type">rg:</span>
            <span class="personal-data__value">60.222.547-8</span>
          </li>
          <li class="personal-data">
            <span class="personal-data__type">Data de nascimento:</span>
            <span class="personal-data__value">24/02/2001</span>
          </li>

        </ul>
      </div>
    </div>
    <div class="volunteer-information">
      <div class="volunteer-content__address">
        <h3 class="address__title">Endereço</h3>
        <div class="volunteer__address">
          <span class="information">CEP:</span>
          <span class="information__value">06660-460</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Logradouro:</span>
          <span class="information__value">Avenida José Marcio</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Bairro:</span>
          <span class="information__value">Jardim Rosa</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Cidade:</span>
          <span class="information__value">Itapevi</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Estado:</span>
          <span class="information__value">São Paulo</span>
        </div>
      </div>
      <div class="volunteer-content__contact">
        <h3 class="contact__title">Contato:</h3>
        <div class="volunteer__contact">
          <span class="contact">Telefone:</span>
          <span class="contact__value">(11)99999-0000</span>
        </div>
        <div class="volunteer__contact">
          <span class="contact">E-mail:</span>
          <span class="contact__value">cansei@gmail.com</span>
        </div>
      </div>
      <div class="volunteer-content__address">
        <h3 class="address__title">Dados pessoais</h3>
        <div class="volunteer__address">
          <span class="information">Renda familiar:</span>
          <span class="information__value">1.500,00</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Quantidade de moradores:</span>
          <span class="information__value">9</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Tipo de residência:</span>
          <span class="information__value">Casa</span>
        </div>
        <div class="volunteer__address">
          <span class="information">Metros quadrados da residência:</span>
          <span class="information__value">22</span>
        </div>
      </div>
      <div class="volunteer-content__reason">
        <h3 class="information__title">Observações:</h3>
        <p class="volunteer-reason__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rem laudantium. Reprehenderit
          quod,
          nobis incidunt sint eum minus rem quisquam corrupti mollitia doloremque, obcaecati eius
          voluptatibus.
          Accusantium quos iure expedita!
        </p>
      </div>

    </div>


    <div class="content-buttons">
      <router-link class="update-data__link" to="/update-administrator">
        <button class="update-data__button">Aceitar</button>
      </router-link>
      <button class="delete__button">Excluir</button>
    </div>
  </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "DataBeneficiarieRequest",
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/dashboard/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/beneficiarie/updateBeneficiarieStyle.css");
</style>