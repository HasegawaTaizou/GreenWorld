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
import NotificationBar from '../assets/components/NotificationBar.vue'

export default {
};
</script>

<style>
</style>
