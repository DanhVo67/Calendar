import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  // Khởi tạo trạng thái auth khi store được tạo
  const initializeAuth = () => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      isAuthenticated.value = true
      user.value = JSON.parse(savedUser)
    }
  }

  // Theo dõi trạng thái đăng nhập Firebase
  const setupAuthListener = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        isAuthenticated.value = true
        user.value = firebaseUser
        localStorage.setItem('user', JSON.stringify({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName
        }))
      } else {
        isAuthenticated.value = false
        user.value = null
        localStorage.removeItem('user')
      }
    })
  }

  // Đăng nhập
  const login = async (email, password) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  }

  // Đăng xuất
  const logout = async () => {
    await auth.signOut()
  }
  

  const setAuth = (authenticated, userData) => {
    isAuthenticated.value = authenticated;
    user.value = userData;
  };

  return { 
    isAuthenticated, 
    user, 
    setAuth,
    initializeAuth,
    setupAuthListener,
    login, 
    logout 
    
  }
})