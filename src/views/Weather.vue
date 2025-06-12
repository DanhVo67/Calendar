<template>
  <div class="weather">
    <h1>Dự báo thời tiết</h1>

    <!-- Current Weather Section -->
    <div class="weather-info">
      <h2>Thời tiết hiện tại</h2>
      <div v-if="loading" class="loading">Đang tải dữ liệu...</div>
      <div v-else-if="error" class="error">Có lỗi khi tải dữ liệu thời tiết</div>
      <div v-else>
        <p><strong>Nhiệt độ:</strong> {{ currentTemperature }} &#8451;</p>
        <p><strong>Tốc độ gió:</strong> {{ currentWindSpeed }} m/s</p>
        <p><strong>Độ ẩm:</strong> {{ currentHumidity }}%</p>
      </div>
    </div>

    <!-- Hourly Weather Forecast Section -->
    <div class="weather-info">
      <h2>Dự báo thời tiết hàng giờ (4 giờ tiếp theo)</h2>
      <div v-if="loading" class="loading">Đang tải dữ liệu...</div>
      <div v-else-if="error" class="error">Có lỗi khi tải dữ liệu dự báo</div>
      <table v-else>
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Nhiệt độ (&#8451;)</th>
            <th>Độ ẩm (%)</th>
            <th>Tốc độ gió (m/s)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hour, index) in hourlyForecast" :key="index">
            <td>{{ formatTime(hour.time) }}</td>
            <td>{{ hour.temperature }} &#8451;</td>
            <td>{{ hour.relativeHumidity }}%</td>
            <td>{{ hour.windSpeed }} m/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTemperature = ref(null);
const currentWindSpeed = ref(null);
const currentHumidity = ref(null);
const hourlyForecast = ref([]);
const loading = ref(true);
const error = ref(null);

// Sử dụng API Open-Meteo làm ví dụ
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=21.02&longitude=105.84&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=Asia%2FBangkok';

const formatTime = (timeString) => {
  if (!timeString) return '';
  const date = new Date(timeString);
  return date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
};

onMounted(async () => {
  try {
    loading.value = true;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    // Update current weather
    currentTemperature.value = data.current.temperature_2m?.toFixed(1) ?? 'N/A';
    currentWindSpeed.value = data.current.wind_speed_10m?.toFixed(1) ?? 'N/A';
    currentHumidity.value = data.current.relative_humidity_2m ?? 'N/A';

    // Get only the next 4 hours of hourly forecast
    const now = new Date();
    const nextHours = data.hourly.time
      .map((time, index) => ({ time, index }))
      .filter(({ time }) => new Date(time) > now)
      .slice(0, 4);

    hourlyForecast.value = nextHours.map(({ time, index }) => ({
      time,
      temperature: data.hourly.temperature_2m[index]?.toFixed(1) ?? 'N/A',
      relativeHumidity: data.hourly.relative_humidity_2m[index] ?? 'N/A',
      windSpeed: data.hourly.wind_speed_10m[index]?.toFixed(1) ?? 'N/A'
    }));

  } catch (err) {
    console.error('Error fetching weather data:', err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.weather {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weather-info {
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.weather-info h2 {
  margin-bottom: 15px;
  color: #333;
  font-size: 1.2em;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th, table td {
  padding: 10px 12px;
  text-align: left;
  border: 1px solid #e0e0e0;
}

table th {
  background-color: #f2f2f2;
  font-weight: 600;
}

table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.loading, .error {
  padding: 10px;
  text-align: center;
  color: #666;
}

.error {
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 4px;
}
</style>