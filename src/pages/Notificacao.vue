<template>
  <!-- <div>
    <button @click="showNotification">Mostrar Notificação</button>
  </div> -->
  <div v-if="notificationVisible" class="notification">
    <div class="notification-informations">
      <i class="fa-solid fa-circle-exclamation"></i>
      <p class="notification__text">{{ notificationMessage }}</p>
    </div>
    <div class="progress-bar" :style="{ width: progressWidth }"></div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const notificationVisible = ref(false);
    const notificationMessage = ref("");
    const progressWidth = ref("100%");

    const showNotification = () => {
      notificationMessage.value = "Esta é uma notificação.";
      notificationVisible.value = true;

      const timeout = setTimeout(() => {
        notificationVisible.value = false;
      }, 3000);

      // Iniciar a animação da barra de progresso
      const startTime = Date.now();
      const animationFrame = () => {
        const elapsedTime = Date.now() - startTime;
        const percentage = (elapsedTime / 3000) * 100;
        progressWidth.value = `${84 - percentage}%`;

        if (percentage < 100) {
          requestAnimationFrame(animationFrame);
        }
      };
      requestAnimationFrame(animationFrame);

      // Cancelar a animação da barra de progresso quando a notificação for ocultada manualmente
      watch(notificationVisible, (value) => {
        if (!value) {
          clearTimeout(timeout);
        }
      });
    };

    return {
      showNotification,
      notificationVisible,
      notificationMessage,
      progressWidth,
    };
  },
};
</script>

<style>
.notification {
  background-color: #e7e7e7;
  border-left: 5px solid #408d7b;
  border-radius: 4px;
  min-width: 282px;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 60px;
  gap: 12px;
}

.notification-informations {
  display: flex;
  width: 100%;
  padding-left: 12px;
  margin-top: 12px;
}

.fa-circle-exclamation {
  color: #408d7b;
  padding-right: 12px;
}

.notification__text {
  font-size: 0.75rem;
}

.progress-bar {
  height: 4px;
  background-color: #6ccdb6;
  width: 100%;
  transition: width 0.5s linear;
}
</style>
