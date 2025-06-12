  <template>
    <v-app>
      <v-main>
        <Header />
        <div class="app">

          <Sidebar :collapsed="collapsed" />
          <router-view />
        </div>
      </v-main>
      <footer />
    </v-app>
  </template> 
    
    <script setup>
    import { ref } from 'vue';
    import Sidebar from './components/Sidebar.vue'
    import Header from './components/Header.vue';
    import footer from './components/Footer.vue';

    const collapsed = ref(false);

  // Thiết lập trạng thái của sidebar dựa trên kích thước ban đầu của màn hình
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        collapsed.value = true; // Thu nhỏ thanh sidebar khi kích thước màn hình nhỏ hơn 1024px
      } else {
        collapsed.value = false; // Mở rộng thanh sidebar khi kích thước màn hình lớn hơn 1024px
      }
    });
    </script>
    <style lang="scss">
    :root {
      --primary: #4ade80;
      --primary-alt: #22c55e;
      --grey: #64748b;
      --dark: #1e293b;
      --dark-alt: #334155;
      --light: #f1f5f9;
      --sidebar-width: 300px;
      --blue: #0066CC;;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Fira sans', sans-serif;
    }
    
    body {
      background: var(--light);
    }
    
    button {
      cursor: pointer;
      appearance: none;
      border: none;
      outline: none;
      background: none;
    }
    
    .app {
      display: flex;
    
      main {
        flex: 1 1 0;
        padding: 2rem;
    
        @media (max-width: 1024px) {
          padding-left: 6rem;
          
        }
      }
    }
    .sidebar {
    width: var(--sidebar-width);
    height: 100%;
    background-color: var(--grey);
    color: #fff;
    transition: width 0.3s ease;

    // Ẩn thanh sidebar khi được thu nhỏ
    &.collapsed {
      width: 0;
    }
  }

  // Đảm bảo rằng thanh sidebar được ẩn khi kích thước màn hình nhỏ hơn 1024px
  @media (max-width: 1024px) {
    .sidebar {
      width: 0;
    }
  }
    </style> 
  //App.vue

<!-- <template>
   <div>
   <FirestoreExample />
   </div>
</template> 

<script setup>
import FirestoreExample from './components/FirestoreExample.vue'
</script> -->