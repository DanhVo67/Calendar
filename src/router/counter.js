import { ref, provide, onMounted } from 'vue';
import db from '../firebase'; // Đảm bảo bạn import cài đặt của Firebase Firestore ở đây
import { collection, getDocs } from 'firebase/firestore';
export const events = ref([]);
export const newEvents = [];
provide('newEvents', newEvents);
export const dialog = ref(false);
