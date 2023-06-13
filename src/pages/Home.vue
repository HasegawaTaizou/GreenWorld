<template>
  <div id="body">
    <header>
      <nav class="navigation-container">
        <img
          class="menu"
          onclick="openNavHalf()"
          id="icon-half-menu"
          aria-hidden="true"
          src="../assets/img/menu.png "
          alt=""
        />
        <ul class="navigations">
          <li class="navigation">
            <router-link to="#who-we-are">Quem somos?</router-link>
          </li>
          <li class="navigation">
            <router-link to="#our-cause">Nossa causa</router-link>
          </li>
          <li class="navigation">
            <router-link to="#projects">Projetos</router-link>
          </li>
          <li class="navigation">
            <router-link to="#family">Famílias</router-link>
          </li>
          <li class="navigation">
            <router-link to="#our-partners">Parcerias</router-link>
          </li>
          <li class="navigation">
            <router-link to="/volunteers">Voluntários</router-link>
          </li>
        </ul>
        <ul id="mySidenav" class="sidenav">
          <li>
            <router-link to="#" class="closebtn" onclick="closeNav()"
              ><i class="fas fa-times"></i
            ></router-link>
          </li>
          <li>
            <router-link to="#casa">Início</router-link>
          </li>
          <li>
            <router-link to="#especies">Espécies</router-link>
          </li>
          <li>
            <router-link to="#fenomenos">Fenômenos</router-link>
          </li>
          <li>
            <router-link to="#poluicao">Poluição</router-link>
          </li>
          <li>
            <router-link to="#informacoes">Informações</router-link>
          </li>
        </ul>
      </nav>
      <div class="content-buttons">
        <!-- <a href="#" class="log-in__link">
                <button class="log-in__button">
                    Log In
                </button>
            </a> -->
        <router-link class="sign-up__link" to="/volunteer-registration-part-one">
          <button class="sign-up__button">Cadastre-se</button>
        </router-link>
      </div>
    </header>
    <main>
      <a class="back-top" href="#">
        <i class="fas fa-arrow-circle-left"></i>
      </a>

      <section id="home">
        <div class="content-presenting-company">
          <h1 class="title-home">Green World</h1>
          <h2 class="caption-home">
            Cultivando a terra com respeito e responsabilidade
          </h2>

          <a href="#company-management" class="know-more-home__link">
            <button class="know-more-home__button">Saiba mais</button>
          </a>
        </div>
        <!-- <img class="green-world-logo" src="./img/green-world-logo.png" alt=""> -->
      </section>

      <section id="company-management">
        <article class="article-mission">
          <div class="article-title">
            <img
              class="article-title__icon"
              src="../assets/img/icon-mission-article.png"
              alt=""
            />
            <span class="article-title__span">Missão</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
        <article class="article-vision">
          <div class="article-title">
            <img
              class="article-title__icon"
              src="../assets/img/icon-vision-article.png"
              alt=""
            />
            <span class="article-title__span">Visão</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
        <article class="article-values">
          <div class="article-title">
            <img
              class="article-title__icon"
              src="../assets/img/icon-values-article.png"
              alt=""
            />
            <span class="article-title__span">Valores</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
      </section>

      <section id="who-we-are">
        <img class="teste" src="../assets/img/mato1.png" alt="" />
        <article class="who-we-are-content">
          <h3 class="who-we-are__title">Quem somos?</h3>
          <p class="who-we-are__text">
            A Green World é uma empresa agrícola empenhada em fornecer alimentos
            de alta qualidade para os lares das famílias brasileiras, trazendo
            alegria e felicidade às suas mesas. Reconhecemos o nosso papel
            crucial como indústria agrícola no que diz respeito ao meio ambiente
            e à sustentabilidade. Em consonância com os Objetivos de
            Desenvolvimento Sustentável (ODS), a Green World criou um projeto
            com o objetivo de combater a fome por meio da implementação de
            hortas em lares carentes.
          </p>
        </article>
      </section>

      <section id="our-cause">
        <article class="our-cause-content">
          <h3 class="our-cause__title">Nossa causa</h3>
          <p class="our-cause__text">
            A Green World é uma organização comprometida com a causa de trazer
            alimentos seguros para os brasileiros e garantir o direito
            fundamental de toda pessoa à alimentação adequada. Reconhecendo a
            importância da segurança alimentar e nutricional, a Green World
            busca promover um sistema alimentar sustentável e inclusivo, que
            atenda às necessidades básicas de todas as pessoas.
          </p>
          <p class="our-cause__text">
            A segurança alimentar é uma questão fundamental que abrange a
            disponibilidade, o acesso, o consumo e a utilização de alimentos
            seguros e nutritivos. Infelizmente, apesar do Brasil ser um país
            rico em recursos naturais e com grande potencial agrícola, muitos
            brasileiros ainda sofrem com a falta de acesso a alimentos adequados
            e seguros. A Green World procura enfrentar esse desafio, trabalhando
            em diversas frentes para garantir que todos tenham acesso a
            alimentos saudáveis.
          </p>
          <p class="our-cause__text">
            Estamos empenhados em combater o desperdício de alimentos, no
            Brasil, uma quantidade significativa de alimentos é perdida ou
            descartada em todas as etapas da cadeia de produção e consumo. A
            organização trabalha para conscientizar sobre a importância da
            redução do desperdício de alimentos e promover ações práticas para
            evitar o descarte necessário. Ao reduzir o desperdício, é possível
            aproveitar melhor os recursos disponíveis e garantir que mais
            pessoas tenham acesso a alimentos seguros.
          </p>
        </article>
        <img class="our-cause__image" src="../assets/img/mato1.png" alt="" />
      </section>

      <section id="projects">
        <div class="projects-title-content">
          <h3 class="projects-title">Projetos</h3>

          <div class="be-a-volunteer-content">
            <p class="be-a-volunteer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
              finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
              rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
              Curabitur commodo enim bibendum, condimentum augue id, elementum
              magna. Etiam in lacus placerat, faucibus felis sed, congue elit.
            </p>
            <router-link class="be-a-volunteer__link" to="./volunteers.html">
              <button class="be-a-volunteer__button">Ser um voluntário</button>
            </router-link>
          </div>
        </div>

        <div class="projects-container">
          <div class="project-content-every-drop-counts">
            <span class="project__name">Cada gota conta</span>

            <router-link class="project__link" to="/every-drop-counts">
              <button class="project__button">Saber mais</button>
            </router-link>
          </div>

          <div class="project-content-seed-of-love">
            <span class="project__name">Semente do amor</span>

            <router-link class="project__link" to="/seed-of-love">
              <button class="project__button">Saber mais</button>
            </router-link>
          </div>

          <div class="project-content-food-distribution">
            <span class="project__name">Distribuição de alimentos</span>

            <router-link class="project__link" to="/food-basket-distribution">
              <button class="project__button">Saber mais</button>
            </router-link>
          </div>
        </div>
      </section>

      <section id="family">
        <h3 class="family-title">Famílias</h3>
        <p class="family-text">
          Acompanhe os relatos das famílias beneficiadas pelos nossos projetos:
        </p>

        <div class="familys-imagens">
          <img src="../assets/img/family1.png" alt="" />
          <img src="../assets/img/family2.png" alt="" />
          <img src="../assets/img/family3.png" alt="" />
        </div>

        <router-link
          class="family-know-more__link"
          to="/feedback-beneficiaries"
        >
          <button class="family-know-more__button">Saber mais</button>
        </router-link>
      </section>

      <section id="our-partners">
        <h3 class="our-partners-title">Nossos parceiros</h3>
        <ul class="partners-content">
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt="" />
          </li>

          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt="" />
          </li>

          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt="" />
          </li>
        </ul>

        <p class="partner-text">
          Está interessado em ser um de nossos parceiros? Clique em “saber
          mais”.
        </p>
        <a class="partner__link" href="./our_partners.html">
          <button class="partner__button">Saber mais</button>
        </a>
      </section>
      <section id="founders">
        <h3 class="founders-title">Fundadores</h3>

        <div class="founders-content">
          <article class="founder-container">
            <img
              class="founder__image"
              src="../assets/img/avatar-woman.png"
              alt=""
            />
            <span class="founder__name">Mabel</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="founder-container">
            <img
              class="founder__image"
              src="../assets/img/avatar-man.png"
              alt=""
            />
            <span class="founder__name">Maycon</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="founder-container">
            <img
              class="founder__image"
              src="../assets/img/avatar-woman.png"
              alt=""
            />
            <span class="founder__name">Brenda</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </section>
    </main>
    <footer>
      <div class="meaning-of-agriculture-content">
        <span class="meaning-of-agriculture__title">Agricultura</span>
        <p class="meaning-of-agriculture__text">
          A agricultura é uma prática econômica que consiste no uso dos solos
          para cultivo de vegetais a fim de garantir a subsistência alimentar do
          ser humano.
        </p>
      </div>

      <nav class="social-media-container">
        <ul class="social-media__footer">
          <li>
            <a href="#" class="social__footer"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="#" class="social__footer"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="social__footer"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
        </ul>
      </nav>

      <div class="support-content">
        <span class="support__title">Suporte</span>
        <div class="support__links">
          <router-link class="support__link" to="/faq">FAQ</router-link>
          <router-link class="support__link" to="/policy-privacy"
            >Política de privacidade</router-link
          >
        </div>
      </div>

      <div class="contact-content">
        <span class="contact__title">Contate-nos</span>
        <ul class="contacts">
          <li class="contact">greenworld@gmail.com</li>
          <li class="contact">(11) 4774-4700</li>
          <li class="contact">Alagoas</li>
        </ul>
      </div>

      <p class="copyright">
        Copyright © 2023 | Todos os direitos reservados Green World
      </p>
    </footer>
  </div>
</template>

<script>
import showSlides from "../assets/js/slider.js";
// import removeRegisterDefault from '../assets/js/home.js'

export default {
  name: "Home",
  mounted() {
    this.runShowSlides();
    // this.runRegisterDefault();
  },
  methods: {
    runShowSlides() {
      showSlides();
    },
    // runRegisterDefault() {
    //   removeRegisterDefault()
    // }
  },
};
</script>

<style scoped>
@import url("../assets/css/index/fadeStyle.css");
@import url("../assets/css/index/indexStyle.css");
@import url("../assets/css/index/homeStyle.css");
@import url("../assets/css/index/companyManagementStyle.css");
@import url("../assets/css/index/whoWheAreStyle.css");
@import url("../assets/css/index/ourCauseStyle.css");
@import url("../assets/css/index/familyStyle.css");
@import url("../assets/css/index/projectStyle.css");
@import url("../assets/css/index/partnersStyle.css");
@import url("../assets/css/index/foundersStyle.css");
@import url("../assets/css/index/footerStyle.css");
@import url("../assets/css/index/whoWeAreResponsiveStyle.css");
@import url("../assets/css/index/projectsResponsiveStyle.css");
@import url("../assets/css/index/partnersResponsiveStyle.css");
@import url("../assets/css/index/ourCauseResponsiveStyle.css");
@import url("../assets/css/index/homeResponsiveStyle.css");
@import url("../assets/css/index/footerResponsiveStyle.css");
@import url("../assets/css/index/companyManagementResponsiveStyle.css");
</style>