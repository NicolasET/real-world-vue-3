<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventService from '@/services/EventService';
import type { Event } from '@/components/EventCard.vue';

const event = ref<Event | null>(null);
const props = defineProps<{ id: number }>();

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <div>
    <h1>{{ event?.title }}</h1>
    <p>{{ event?.time }} on {{ event?.date }} @ {{ event?.location }}</p>
    <p>{{ event?.description }}</p>
  </div>
</template>
