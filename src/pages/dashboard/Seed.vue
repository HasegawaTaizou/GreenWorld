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
                <img class="seed-content__image" src="../assets/img/passion_fruit_image.webp" alt="Passion fruit">

                <div class="seed-content__tag-name">
                    <span class="seed-content__tag">Semente</span>
                    <h1 class="seed__title">Maracujá</h1>
                </div>

            </div>

            <div class="seed-information">


                <div class="seed-information__content-data">
                    <h2 class="seed-information__title">Informações</h2>
                    <div class="seed-information__data">
                        <span class="seed-information__data_question">Tempo de cultivo:</span>
                        <span class="seed-information__data_result">1 ano</span>
                    </div>
                    <div class="seed-information__data">
                        <span class="seed-information__data_question">Quantidade de regadas por semana:</span>
                        <span class="seed-information__data_result">3 vezes por semana.</span>
                    </div>
                    <div class="seed-information__data">
                        <span class="seed-information__data_question">Quantidade de água por regada:</span>
                        <span class="seed-information__data_result">50ml</span>
                    </div>
                </div>
                <div class="seed-information__recommendations">
                    <h2 class="seed-information__title">Recomendações</h2>
                    <p class="seed-information__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
                        finibus diam. Nulla efficitur
                        neque eget est lacinia, pellentesque rhoncus velit porta. Etiam dapibus tempus tellus et
                        volutpat. Curabitur commodo enim bibendum, condimentum augue id, elementum magna. Etiam in lacus
                        placerat, faucibus felis sed, congue elit. Etiam eu lacus sit amet justo sagittis facilisis.</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
// import removeRegisterDefault from '../assets/js/home.js'

export default {
    name: "Seed",
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped>
@import url("../../assets/css/variables.css");
@import url("../../assets/css/reset.css");
@import url("../../assets/css/generalStyle.css");
@import url("../../assets/css/dashboard/seeds/seedStyle.css");
</style>