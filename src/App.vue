<!-- App.vue establishes the foundation for single page application layout. Contains elements that will be constant across all views
      - Website title and logo
      - Student header info
      - Split tab view
       -->


<template>
  <v-app>

    <!-- NAV BAR -->
    <v-app-bar
      app
      color="red"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1>MAST</h1>
      </div>
    </v-app-bar>
    <!-- NAV BAR -->

    <!-- ROUTER VIEW WHERE ALL COMPONENTS GO -->
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>


