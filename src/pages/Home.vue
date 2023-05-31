<template>
  <div id="body">
    <header>
      <nav class="navigation-container">
        <ul class="navigations">
          <li class="navigation">
            <a href="#who-we-are">Quem somos?</a>
          </li>
          <li class="navigation">
            <a href="#our-cause">Nossa causa</a>
          </li>
          <li class="navigation">
            <a href="#projects">Projetos</a>
          </li>
          <li class="navigation">
            <a href="#family">Famílias</a>
          </li>
          <li class="navigation">
            <a href="#our-partners">Parcerias</a>
          </li>
          <li class="navigation">
            <router-link to="/volunteers">Voluntários</router-link>
          </li>
        </ul>
      </nav>
      <div class="content-buttons">
        <router-link class="log-in__link" to="/login">
          <button class="log-in__button">Log In</button>
        </router-link>
        <router-link class="sign-up__link" to="/register">
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
          <h2 class="caption-home">Cultivando a terra com respeito e responsabilidade</h2>
          <a href="#company-management" class="know-more-home__link">
            <button class="know-more-home__button">Saiba mais</button>
          </a>
        </div>
      </section>
      <section id="company-management">
        <article class="article-mission">
          <div class="article-title">
            <img class="article-title__icon" src="../assets/img/icon-mission-article.png" alt />
            <span class="article-title__span">Missão</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
        <article class="article-vision">
          <div class="article-title">
            <img class="article-title__icon" src="../assets/img/icon-vision-article.png" alt />
            <span class="article-title__span">Visão</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
        <article class="article-values">
          <div class="article-title">
            <img class="article-title__icon" src="../assets/img/icon-mission-article.png" alt />
            <span class="article-title__span">Valores</span>
          </div>
          <p class="article-text">
            A missão da Green World é transformar lares, trazendo o conforto de
            ter o alimento em sua casa de forma segura.
          </p>
        </article>
      </section>

      <section id="who-we-are">
        <img class="teste" src="../assets/img/rufus-o-dea-p3Loavrv6z8-unsplash.jpg" alt />
        <article class="who-we-are-content">
          <h3 class="who-we-are__title">Quem somos?</h3>
          <p class="who-we-are__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
            rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
            Curabitur commodo enim bibendum, condimentum augue id, elementum
            magna. Etiam in lacus placerat, faucibus felis sed, congue elit.
            Etiam eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et
            felis eget facilisis. In imperdiet est non eros ornare, auctor
            congue eros malesuada. Duis sollicitudin turpis sit amet mi
            sagittis, eu luctus massa posuere. Duis tincidunt dignissim rhoncus.
            Pellentesque egestas non mi ut venenatis. Sed ac velit feugiat orci
            efficitur finibus. Phasellus dui lorem, feugiat non tempus et,
            mattis vel elit. Cras congue nisl ex, id mollis eros bibendum sed.
            Cras volutpat ante sed euismod condimentum. Mauris nec eros tortor.
            Pellentesque bibendum, tortor et rhoncus semper, arcu eros volutpat
            ante, elementum efficitur elit felis ut ligula. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero rem ipsam quo nam in
            ullam iure, quaerat, minus nobis delectus magni cupiditate omnis ex,
            recusandae quisquam nulla voluptatibus error aperiam?
          </p>
        </article>
      </section>

      <section id="our-cause">
        <article class="our-cause-content">
          <h3 class="our-cause__title">Nossa causa</h3>
          <p class="our-cause__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            finibus diam. Nulla efficitur neque eget est lacinia, pellentesque
            rhoncus velit porta. Etiam dapibus tempus tellus et volutpat.
            Curabitur commodo enim bibendum, condimentum augue id, elementum
            magna. Etiam in lacus placerat, faucibus felis sed, congue elit.
            Etiam eu lacus sit amet justo sagittis facilisis. Morbi tincidunt et
            felis eget facilisis. In imperdiet est non eros ornare, auctor
            congue eros malesuada. Duis sollicitudin turpis sit amet mi
            sagittis, eu luctus massa posuere. Duis tincidunt dignissim rhoncus.
            Pellentesque egestas non mi ut venenatis. Sed ac velit feugiat orci
            efficitur finibus. Phasellus dui lorem, feugiat non tempus et,
            mattis vel elit. Cras congue nisl ex, id mollis eros bibendum sed.
            Cras volutpat ante sed euismod condimentum. Mauris nec eros tortor.
            Pellentesque bibendum, tortor et rhoncus semper, arcu eros volutpat
            ante, elementum efficitur elit felis ut ligula. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Vero rem ipsam quo nam in
            ullam iure, quaerat, minus nobis delectus magni cupiditate omnis ex,
            recusandae quisquam nulla voluptatibus error aperiam?
          </p>
        </article>
        <img class="our-cause__image" src="../assets/img/farmer-image.png" alt />
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
            <router-link class="be-a-volunteer__link" to="/volunteers">
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
        <p class="family-text">Acompanhe os relatos das famílias beneficiadas pelos nossos projetos:</p>
        <div class="familys-imagens">
          <img src="../assets/img/family1.png" alt />
          <img src="../assets/img/family2.png" alt />
          <img src="../assets/img/family3.png" alt />
        </div>
        <router-link class="family-know-more__link" to="/feedback-beneficiaries">
          <button class="family-know-more__button">Saber mais</button>
        </router-link>
      </section>
      <section id="our-partners">
        <h3 class="our-partners-title">Nossos parceiros</h3>
        <ul class="partners-content">
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
          <li class="partner">
            <img src="../assets/img/our-partner-image.png" alt />
          </li>
        </ul>
        <p class="partner-text">
          Está interessado em ser um de nossos parceiros? Clique em “saber
          mais”.
        </p>
        <router-link class="partner__link" to="/our-partners">
          <button class="partner__button">Saber mais</button>
        </router-link>
      </section>
      <section id="founders">
        <h3 class="founders-title">Fundadores</h3>
        <div class="founders-content">
          <article class="founder-container">
            <img class="founder__image" src="../assets/img/avatar-woman.png" alt />
            <span class="founder__name">Mabel</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="founder-container">
            <img class="founder__image" src="../assets/img/avatar-man.png" alt />
            <span class="founder__name">Maycon</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <article class="founder-container">
            <img class="founder__image" src="../assets/img/avatar-woman.png" alt />
            <span class="founder__name">Brenda</span>
            <span class="founder__office">Lorem ipsum dolor sit amet</span>
            <nav class="social-media-founder-container">
              <ul class="social-media">
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
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
            <a href="#" class="social__footer">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" class="social__footer">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" class="social__footer">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="support-content">
        <span class="support__title">Suporte</span>
        <div class="support__links">
          <router-link class="support__link" to="/faq">FAQ</router-link>
          <router-link class="support__link" to="/privacy-policy">Política de privacidade</router-link>
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
      <p class="copyright">Copyright © 2023 | Todos os direitos reservados Green World</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
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
</style>