//components/FirestoreExample.vue

<template>
  <div>
    <h1>Firestore CRUD Example</h1>
    <form @submit.prevent="addPost">
      <input v-model="newPost.title" placeholder="Title" />
      <input v-model="newPost.content" placeholder="Content" />
      <button type="submit">Add Post</button>
    </form>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="updatePost(post)">Update</button>
        <button @click="deletePost(post.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import db  from '../firebase'; // Ensure this is correctly importing your initialized Firestore instance
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';


const querySnapshot = await getDocs(collection(db, 'posts'));
console.log("Query Snapshot:", querySnapshot);
const posts = ref([]);
const newPost = ref({
  title: '',
  content: ''
});

onMounted(async () => {
  await getPosts();
});

const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    posts.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting documents: ', error);
  }
};

const addPost = async () => {
  try {
    await addDoc(collection(db, 'posts'), newPost.value);
    newPost.value = { title: '', content: '' };
    await getPosts();
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

const updatePost = async (post) => {
  const updatedPost = prompt('Enter new content:', post.content);
  if (updatedPost) {
    try {
      await updateDoc(doc(db, 'posts', post.id), { content: updatedPost });
      await getPosts();
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }
};

const deletePost = async (id) => {
  try {
    await deleteDoc(doc(db, 'posts', id));
    await getPosts();
  } catch (error) {
    console.error('Error removing document: ', error);
  }
};
</script>