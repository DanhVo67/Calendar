<template>
  <v-card
    title="Sự kiện trong năm"
    flat
    class="table"
  >
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>

  
  
  </template>
  
  <script setup>
import { ref } from 'vue';
import footer from '../components/Footer.vue'
const search = ref('');
const headers = ref([
  {
    align: 'start',
    key: 'title',
    sortable: false,
    title: 'Tên sự kiện',
  },
  { key: 'start', title: 'bắt đầu' },
  { key: 'end', title: 'kết thúc' },
]);
const desserts = ref([
    {
    title: 'Tết Dương lịch',
    start: '1 Tháng 1',
    end: '1 Tháng 1',
    },

    {
    title: 'Tết Nguyên đán',
    start: '8 Tháng 2',
    end: '13 Tháng 2',
    },

    {
    title: 'Ngày Valentine',
    start: '14 Tháng 2',
    end: '14 Tháng 2',
    },

    {
    title: 'Ngày quốc tế phụ nữ',
    start: '8 Tháng 3',
    end: '8 Tháng 3',
    },

    {
    title: 'Giỗ tổ Hùng Vương',
    start: '18 Tháng 4',
    end: '18 Tháng 4',
    },

    {
    title: 'Ngày Thống nhất đất nước',
    start: '30 Tháng 4',
    end: '30 Tháng 4',
    },

    {
    title: 'Ngày quốc tế lao động',
    start: '1 Tháng 5',
    end: '1 Tháng 5',
    },

    {
    title: 'Ngày Quốc tế Thiếu nhi',
    start: '1 Tháng 6',
    end: '1 Tháng 6',
    },

    {
    title: 'Ngày Gia đình Việt Nam',
    start: '28 Tháng 6',
    end: '28 Tháng 6',
    },

    {
    title: 'Ngày lễ Quốc khánh',
    start: '31 Tháng 8',
    end: '3 Tháng 9',
    },

    {
    title: 'Tết trung thu',
    start: '17 Tháng 9',
    end: '17 Tháng 9',
    },

    {
    title: 'Ngày phụ nữ Việt Nam',
    start: '20 Tháng 10',
    end: '20 Tháng 10',
    },

    {
    title: 'Ngày Nhà giáo Việt Nam',
    start: '20 Tháng 11',
    end: '20 Tháng 11',
    },

    {
    title: 'Lễ Giáng Sinh',
    start: '24 Tháng 12',
    end: '25 Tháng 12',
    },
]); 
  </script>
  
<style lang="scss" scoped>
    .table{
    width: 200vh;
    overflow: hidden;
    margin: 1rem;
    color: var(--dark-alt);  
    border: 5px solid var(--light);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }
    .table td {
    font-size: 1.2rem;
    }
</style>    