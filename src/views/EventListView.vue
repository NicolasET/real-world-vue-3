<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EventCard, { type Event } from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

const events = ref<Event[]>([]);

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
