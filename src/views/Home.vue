<template>
  <div class="calendar-dv">
    <v-sheet class="d-flex" height="54" tile>
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label=""
        variant="outlined"
        dense
        hide-details
      ></v-select>
      <v-select 
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        label="Các ngày trong tuần"
        variant="outlined"
        dense
        hide-details
      ></v-select>
    </v-sheet>
    
    <div class="addEvents">
      <v-btn @click="handleAddEventClick">Thêm sự kiện</v-btn>
      
      <v-snackbar v-model="showLoginAlert" color="warning" timeout="3000">
        Vui lòng đăng nhập để thêm sự kiện!
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="$router.push('/login')">Đăng nhập</v-btn>
        </template>
      </v-snackbar>

      <v-dialog v-model="dialog" max-width="600">
        <v-form @submit.prevent="submitEventForm">
          <v-text-field v-model="newPost.title" label="Tên sự kiện" required></v-text-field>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="newPost.startD" label="Ngày bắt đầu" required></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.startM" label="Tháng bắt đầu" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="newPost.endD" label="Ngày kết thúc" required></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="newPost.endM" label="Tháng kết thúc" required></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">Hủy</v-btn>
            <v-btn color="primary" type="submit">Lưu</v-btn>
          </v-card-actions>
        </v-form>
      </v-dialog>
    </div>
    
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
        @click:day="handleDateClick"
      ></v-calendar>
    </v-sheet>
    
    <v-speed-dial location="bottom left" transition="slide-y-transition"></v-speed-dial>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDate } from 'vuetify'
import { useAuthStore } from '../stores/auth'
import { dialog, newEvents, events } from '../stores/counter'
import { posts, newPost, addPost, getPosts } from '../stores/post'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const authStore = useAuthStore()
const showLoginAlert = ref(false)
const adapter = useDate()

// Calendar configuration
const type = ref('month')
const types = ref(['month', 'week', 'day'])
const weekday = ref([0, 1, 2, 3, 4, 5, 6])
const weekdays = ref([
  { title: 'Chủ Nhật - Thứ 7', value: [0, 1, 2, 3, 4, 5, 6] },
  { title: 'Thứ 2 - Chủ Nhật', value: [1, 2, 3, 4, 5, 6, 0] },
  { title: 'Thứ 2 - Thứ 6', value: [1, 2, 3, 4, 5] },
  { title: 'Thứ 2, 4, 6', value: [1, 3, 5] },
])
const value = ref([new Date()])

// Event handlers
const handleAddEventClick = () => {
  if (!authStore.isAuthenticated) {
    showLoginAlert.value = true
    return
  }
  dialog.value = true
}

const submitEventForm = async () => {
  try {
    await addPost()
    dialog.value = false
    await getEvents({ 
      start: adapter.startOfDay(adapter.startOfMonth(new Date())), 
      end: adapter.endOfDay(adapter.endOfMonth(new Date())) 
    })
  } catch (error) {
    console.error('Error adding event:', error)
    alert('Có lỗi khi thêm sự kiện: ' + error.message)
  }
}

// Calendar event functions
const getEvents = async ({ start, end }) => {
  const eventsCol = collection(db, 'posts')
  const eventSnapshot = await getDocs(eventsCol)
  const eventList = eventSnapshot.docs.map(doc => doc.data())
  
  newEvents.length = 0

  eventList.forEach(event => {
    newEvents.push({
      title: event.title, 
      start: new Date(new Date().getFullYear(), parseInt(event.startM) - 1, parseInt(event.startD)),
      end: new Date(new Date().getFullYear(), parseInt(event.endM) - 1, parseInt(event.endD)),
      color: 'green',
      allDay: true
    })
  })

  events.value = [...newEvents]
  const min = start
const max = end
const days = (max.getTime() - min.getTime())
const eventCount = rnd(days, days + 20)

//#region pash event in year  

       
        // Thêm sự kiện từ Firestore vào newEvents
        // eventList.forEach(event => {
        //     newEvents.push({
        //         title: event.title, 
        //         start: new Date(new Date().getFullYear(), parseInt(event.startM) - 1, parseInt(event.startD)), // Tạo đối tượng ngày từ dữ liệu Firestore
        //         end:  new Date(new Date().getFullYear(), parseInt(event.endM) - 1, parseInt(event.endD)), // Tạo đối tượng ngày từ dữ liệu Firestore
        //         color: 'green',
        //         allDay: true
        //     });
        // });

newEvents.push({
title: 'International New Year',
start: new Date(new Date().getFullYear(), 11, 31),
end: new Date(new Date().getFullYear(), 0, 1),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Test',
start: new Date(new Date().getFullYear(), 4, 17),
end: new Date(new Date().getFullYear(), 4, 17),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Tết Dương lịch',
start: new Date(new Date().getFullYear(), 3, 27),
end: new Date(new Date().getFullYear(), 3, 27),
// start: new Date(new Date().getFullYear(), 4, 5  ),
// end: new Date(new Date().getFullYear(), 4, 5),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Tết ông công ông táo',
start: new Date(new Date().getFullYear(), 0, 22),
end: new Date(new Date().getFullYear(), 0, 22),
color: 'green',
allDay: true
})
newEvents.push({
title: 'VietNamese New Year',
start: new Date(new Date().getFullYear(), 0, 28),
end: new Date(new Date().getFullYear(), 0, 29),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Tet holiday',
start: new Date(new Date().getFullYear(), 0, 30),
end: new Date(new Date().getFullYear(), 1, 2),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Tết Nguyên đán ',
start: new Date(new Date().getFullYear(), 0, 30),
end: new Date(new Date().getFullYear(), 1, 2),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Ngày Valentine',
start: new Date(new Date().getFullYear(), 1, 14),
end: new Date(new Date().getFullYear(), 1, 14),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày quốc tế Phụ nữ',
start: new Date(new Date().getFullYear(), 2, 8),
end: new Date(new Date().getFullYear(), 2, 8),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Giỗ tổ Hùng Vương',
start: new Date(new Date().getFullYear(), 3, 18),
end: new Date(new Date().getFullYear(), 3, 18),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày Thống nhất đất nước',
start: new Date(new Date().getFullYear(), 3, 30),
end: new Date(new Date().getFullYear(), 3, 30),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày quốc tế Lao động',
start: new Date(new Date().getFullYear(), 4, 1),
end: new Date(new Date().getFullYear(), 4, 1),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Quốc tế thiếu nhi',
start: new Date(new Date().getFullYear(), 5, 1),
end: new Date(new Date().getFullYear(), 5, 1),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày gia đình Việt Nam',
start: new Date(new Date().getFullYear(), 5, 28),
end: new Date(new Date().getFullYear(), 5, 28),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày lễ Quốc khánh',
start: new Date(new Date().getFullYear(), 8, 2),
end: new Date(new Date().getFullYear(), 8,3),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Tết trung thu',
start: new Date(new Date().getFullYear(), 8, 17),
end: new Date(new Date().getFullYear(), 8, 17),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày phụ nữ Việt Nam',
start: new Date(new Date().getFullYear(), 9, 20),
end: new Date(new Date().getFullYear(), 9, 20),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Ngày Nhà giáo Việt Nam',
start: new Date(new Date().getFullYear(), 10, 20),
end: new Date(new Date().getFullYear(), 10, 20),
color: 'red',
allDay: true
})
newEvents.push({
title: 'Christmas Eve',
start: new Date(new Date().getFullYear(), 11, 24),
end: new Date(new Date().getFullYear(), 11, 25),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Giáng Sinh',
start: new Date(new Date().getFullYear(), 11, 24),
end: new Date(new Date().getFullYear(), 11, 25),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Đêm giao thừa',
start: new Date(new Date().getFullYear(), 11, 31),
end: new Date(new Date().getFullYear(), 11, 31),
color: 'green',
allDay: true
})
newEvents.push({
title: 'Đêm giao thừa',
start: new Date(new Date().getFullYear(), 0, 24),
end: new Date(new Date().getFullYear(), 0, 25),
color: 'green',
allDay: true
})

//#endregion
events.value = newEvents;
}
//tạo màu event
const getEventColor = (event) => {
return event.color
}
//chuyển lịch đi sang tuần
const rnd = (a, b) => {
return Math.floor((b - a + 1) * Math.random()) + a
}
onMounted(async () => {
    await fetchEventsFromDatabase();
});
onMounted(() => {
    getPosts();
});


onMounted(async () => {
  authStore.initializeAuth()
  authStore.setupAuthListener()

  if (newEvents.length === 0) {
    await getEvents({ 
      start: adapter.startOfDay(adapter.startOfMonth(new Date())), 
      end: adapter.endOfDay(adapter.endOfMonth(new Date())) 
    })
  }
  await getPosts()
})



</script>

<style scoped>
.calendar-dv {
  margin-left: 1rem;
  margin-top: 1rem;
  width: 100%;
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