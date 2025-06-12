// src/stores/auth.js
import { ref } from 'vue';

const isSignedIn = ref(false);
const userDisplayName = ref('');
const userPhotoURL = ref('');

export const useAuthStore = () => {
  return {
    isSignedIn,
    userDisplayName,
    userPhotoURL
  };
};
