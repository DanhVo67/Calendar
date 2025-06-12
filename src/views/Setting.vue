<template>
  <div class="settings-container" :class="selectedTheme">
    <v-card class="settings-card">
      <v-card-title class="settings-title">
        <v-icon large left>mdi-cog</v-icon>
        <h1>Cài Đặt</h1>
      </v-card-title>

      <v-card-text>
        <!-- Theme Selection -->
        <div class="setting-section">
          <h2 class="section-title">
            <v-icon left>mdi-brightness-6</v-icon>
            Giao diện
          </h2>
          <v-radio-group v-model="selectedTheme" @change="changeTheme" row>
            <v-radio
              label="Sáng"
              value="light"
              color="primary"
            ></v-radio>
            <v-radio
              label="Tối"
              value="dark"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
const selectedTheme = ref('light');
const selectedLanguage = ref('vi');
const notificationsEnabled = ref(true);
const soundEnabled = ref(true);

const languages = [
  { text: 'Tiếng Việt', value: 'vi' },
  { text: 'English', value: 'en' },
  
];

// Load saved settings from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme');
  const savedLang = localStorage.getItem('selectedLanguage');
  const savedNotifications = localStorage.getItem('notificationsEnabled');
  const savedSound = localStorage.getItem('soundEnabled');

  if (savedTheme) {
    selectedTheme.value = savedTheme;
    applyTheme(savedTheme);
  }

  if (savedLang) selectedLanguage.value = savedLang;
  if (savedNotifications) notificationsEnabled.value = savedNotifications === 'true';
  if (savedSound) soundEnabled.value = savedSound === 'true';
});

function changeTheme() {
  localStorage.setItem('selectedTheme', selectedTheme.value);
  applyTheme(selectedTheme.value);
}

function applyTheme(themeName) {
  theme.global.name.value = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
}

function changeLanguage() {
  localStorage.setItem('selectedLanguage', selectedLanguage.value);
  // Here you would typically implement your i18n logic
  console.log('Language changed to:', selectedLanguage.value);
}

function saveNotificationSettings() {
  localStorage.setItem('notificationsEnabled', notificationsEnabled.value);
  localStorage.setItem('soundEnabled', soundEnabled.value);
}
</script>

<style scoped>
.settings-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}

.settings-card {
  padding: 24px;
  border-radius: 12px;
}

.settings-title {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.settings-title h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 500;
}

.setting-section {
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.setting-section:last-child {
  border-bottom: none;
}

.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
}

.v-radio-group {
  margin-top: 8px;
}

.v-switch {
  margin-top: 8px;
}

/* Dark theme specific styles */
.settings-container.dark {
  --text-color: #ffffff;
  --bg-color: #1e1e1e;
}

.settings-container.dark .settings-card {
  background-color: #2d2d2d;
  color: white;
}

.settings-container.dark .section-title,
.settings-container.dark .settings-title {
  color: white;
}

.settings-container.dark .setting-section {
  border-bottom-color: rgba(255, 255, 255, 0.12);
}
</style>