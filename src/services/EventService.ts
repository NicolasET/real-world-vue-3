import axios from 'axios';
import type { Event } from '@/components/EventCard.vue';

const baseURL = 'https://my-json-server.typicode.com/NicolasET/real-world-vue-3';
const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getEvents() {
    return apiClient.get<Event[]>('/events');
  },
  getEvent(id: number) {
    return apiClient.get<Event>('/events/' + id);
  }
};
