<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Class', value: 'class'},
          { text: 'Name', value: 'name' },
          { text: 'Professor', value: 'professor' },
          { text: 'Time', value: 'time' },
          { text: 'Credits', value: 'credits' },
        ],
        desserts: [
          {
            class: 'CSE 101',
            name: 'Intro To CS',
            professor: 'Kevin McDonnell',
            time: '11:30AM - 12:50PM',
            credits: 3,
          },
          {
            class: 'CSE 114',
            name: 'Computer Science I',
            professor: 'Praveen Tripathi',
            time: '11:30AM - 12:50PM',
            credits: 3,
          },
          {
            class: 'CSE 214',
            name: 'Data Structures',
            professor: 'Ahmad Esmaili',
            time: '11:30AM - 12:50PM',
            credits: 3,
          },
        ],
      }
    },
  }
</script>