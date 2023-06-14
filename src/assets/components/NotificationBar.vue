<template>
  <div v-if="notificationStatus" class="notification">
    <div class="notification-informations">
      <i class="fa-solid fa-circle-exclamation"></i>
      <p class="notification__text">{{ message }}</p>
    </div>
    <div class="progress-bar" :style="{ width: progressWidth }"></div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive, onMounted, watch } from 'vue';

export default {
  name: "NotificationBar",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const notificationState = reactive({
      progressWidth: "100%",
    });

    const notificationStatus = computed(() => store.state.showNotification);

    const showNotification = () => {
      setTimeout(() => {
        store.commit("hideNotification");
      }, 3000);

      // Iniciar a animação da barra de progresso
      const startTime = Date.now();
      const animationFrame = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const totalTime = 3000;
        const percentage = (elapsedTime / totalTime) * 100;
        notificationState.progressWidth = `${84 - percentage}%`;

        if (currentTime - startTime < totalTime) {
          requestAnimationFrame(animationFrame);
        }
      };
      requestAnimationFrame(animationFrame);
    };

    onMounted(() => {
      showNotification();
    });

    watch(notificationStatus, (newValue) => {
      if (!newValue) {
        notificationState.progressWidth = "0%";
      }
    });

    return {
      message: props.message,
      progressWidth: computed(() => notificationState.progressWidth),
      notificationStatus,
    };
  },
};
</script>

<style>
.notification {
  background-color: #e7e7e7;
  border-left: 5px solid #408d7b;
  border-radius: 4px;
  min-width: 356px;
  min-height: 64px;
  text-align: center;
  position: fixed !important;
  right: auto;
  left: auto;
  display: flex;
  flex-direction: column;
  top: 60px;
  gap: 12px;
}

.notification-informations {
  display: flex;
  width: 100%;
  padding-left: 12px;
  margin-top: 16px !important;
  align-items: center;
}

.fa-circle-exclamation {
  color: #408d7b;
  padding-right: 12px;
  font-size: 1.5rem;
}

.notification__text {
  font-size: 1.5rem !important;
  padding-right: 12px;
}

.progress-bar {
  height: 4px;
  background-color: #6ccdb6;
  width: 100%;
  transition: width 0.5s linear;
}
</style>
