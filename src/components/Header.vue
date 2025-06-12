<!-- src/components/Header.vue -->
<template>
    <div class="containter-">
      <div class="header">
          <div class="left-section">
            <p>ỦY BAN NHÂN DÂN</p>
            <p>THÀNH PHỐ HỒ CHÍ MINH</p>
            <p>SỞ GIÁO DỤC VÀ ĐÀO TẠO</p>
          </div>
          <div class="right-section">
            <p>GVHD: PHẠM ĐẲNG PHƯƠNG</p>
            <p>SVTH: VÕ THÀNH DANH</p>
            <p> VÕ MINH THUẬN</p>
          </div>
          
      </div>

      
      
        <div class="title">
            <h1>CAO ĐẲNG KINH TẾ THÀNH PHỐ HỒ CHÍ MINH</h1>
        </div>

        <div class="logo-truong">
          <router-link to="/">
            <img src="../assets/logo-truong.png" alt="Vue">
          </router-link>
        </div>
      <div class="rou-tex-while" style="background-color: var(--dark); padding: 2rem; width: 100%; height: 2rem;">
        <div class="logo">
          <router-link to="/" :style="{ textDecoration: 'none' }">
            <i class="calendar custom-color ">Calendar</i>
          </router-link>
        </div>
  
        <router-link to="/event" class="Find">
          <span class="material-symbols-outlined">Search</span>
        </router-link>
  
        <div class="gmail">
          <div class="totalnoti" @click="showNotification = !showNotification">
            <span class="material-symbols-outlined">notifications</span>
            <span class="circle">{{ a }}</span>    
          </div>
          <div v-if="showNotification" class="notification-form">
            <h3>{{ notificationTitle }}</h3>
            <p>{{ notificationDay }} {{ notificationMonth }}</p>
          </div>
        </div>
  
        <router-link class="user" to="/user">
          <img v-if="isSignedIn" class="user-avatar" :src="userPhotoURL" :alt="userDisplayName" />
          <span v-else class="material-symbols-outlined">account_circle</span>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { EmailAuthProvider } from 'firebase/auth';

  const userPhotoURL = ref('');
  const { isSignedIn, userDisplayName, } = useAuthStore();
  const a = ref("0");
  const showNotification = ref(false);
  function updateA() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    // Example logic to update notification count
    // Replace with your logic
    if (currentDay === 15 && currentMonth === 6) {
      a.value = "!";
    }
  }
  
  window.onload = updateA;
  </script>
  
  <style lang="scss" scoped>
  .header {
    background: linear-gradient(45deg, 
    #ff9a9e 0%, 
    #fad0c4 50%, 
    #fbc2eb 100%);
  display: flex;
  justify-content: space-between;
  // margin-bottom: 30px;
}
  .left-section, .right-section {
  text-align: center;
  
}

.left-section p, .right-section p {
  margin: 5px 0;
  font-size: 14px;
}



.title h1 {
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 5px;
  background: linear-gradient(45deg, 
    #ff9a9e 0%, 
    #fad0c4 50%, 
    #fbc2eb 100%);
}

  

  .rou-tex-while {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  
  .material-symbols-outlined {
    font-size: 2rem;
  }
  
  .Find, .gmail, .user {
    margin-left: 1rem;
    color: var(--light);
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  .Find:hover, .gmail:hover, .user:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
  
  .Find span, .gmail span, .user span {
    display: inline-block;
  }
  
  .logo-truong {
    text-align: center;
    background: linear-gradient(45deg, 
    #ff9a9e 0%, 
    #fad0c4 50%, 
    #fbc2eb 100%);
  }

  .logo {
    margin-left: 38rem;
    margin-right: auto;
    font-weight: bold;
    font-size: 3.5rem;
   
    
  }
  .calendar {
  text-decoration: none !important;
}

.custom-color {
  color: white;

  &:hover, &.router-link-exact-active {
    color: var(--primary);
  }
  
}

  
  
  img {
    width: 130px;
    height: 70px;
  }
  
  .circle {
    width: 15px;
    height: 15px;
    background-color: red;
    margin-right: 10px;
    padding: 0;
    background: #eb2e51;
    border-radius: 100%;
    position: absolute;
    right: -12px;
    top: -5px;
    font-size: 9px;
    line-height: 15px;
    color: white;
    text-align: center;
  }
  
  .totalnoti {
    position: relative;
  }
  
  .notification-form {
    position: absolute;
    top: calc(100% + 10px);
    right: 0px;
    width: 200px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
    margin-top: 1rem;
  }
  
  .user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-icon {
    font-size: 24px;
    margin-right: 10px;
  }
  </style>
  