<template>
  <div>
    <div v-if="authStore.isAuthenticated">
      <v-table class="table" theme="light">
        <thead>
          <tr>
            <th class="text-left">STT</th>
            <th class="text-left">Tên</th>
            <th class="text-left">Bắt đầu</th>
            <th class="text-left">Kết thúc</th>
            <th class="text-left" v-if="authStore.isAuthenticated">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="post.id">
            <td>{{ index + 1 }}</td>
            <td>{{ post.title }}</td>
            <td>Day {{ post.startD }}</td>
            <td>Month {{ post.startM }}</td>
            <td class="btn" v-if="authStore.isAuthenticated">
              <v-btn class="edit-button" @click="updatePost(post)">Chỉnh sửa</v-btn>
              <v-btn class="delete-button" @click="deletePost(post.id)">Xóa</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div v-else class="login-required">
      <v-alert type="warning" prominent>
        Vui lòng đăng nhập để xem lịch sử
      </v-alert>
      <router-link class="buttom" to="/user">
        <v-btn color="primary">Đăng nhập bằng Google</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import { posts, getPosts, updatePost, deletePost } from '../stores/post';

const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isAuthenticated) {
    getPosts();
  }
});
</script>

<style scoped>
.table {
  width: 150vh;
  overflow: hidden;
  margin: 1rem;
  color: var(--dark-alt);  
  border: 5px solid var(--light);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.table td {
  font-size: 20px;
}

.btn {
  margin-left: 1rem;
}

.edit-button {
  background-color: yellow;
}

.delete-button {
  background-color: red;
  margin: 1rem;
}

.addEvents {
  margin-top: 2rem;
  color: white;
}

.v-form {
  background-color: var(--dark);
  color: bisque;
}
</style>