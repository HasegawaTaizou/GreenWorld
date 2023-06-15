<template>
  <div>
    <button @click="openPopup">Abrir Popup</button>

    <div v-if="showPopup" class="popup-container">
      <h2 class="popup__title">Tem certeza?</h2>
      <p class="popup__text">Os dados serão modificados</p>
      <div class="popup__buttons">
        <button class="button__deny" @click="closePopup">Não</button>
        <button class="button__accept" @click="acceptAction">Sim</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PopUp",
  data() {
    return {
      showPopup: false,
    };
  },
  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    },
    acceptAction() {
      // Ação a ser executada ao clicar em "Aceitar"
      // Exemplo: exibindo uma mensagem no console
      console.log("Ação executada!");
      this.closePopup();
    },
  },
};
</script>
  
  <style>
.popup-container {
  border: 1px solid #ccc;
  min-width: 320px;
  max-width: 320px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
  