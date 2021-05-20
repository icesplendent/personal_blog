<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Ice logo"
          class="shrink mr-2"
          contain
          src="./assets/ice.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Icesplendent</h1>


      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/icesplendent"
        target="_blank"
        text
      >
        <span class="mr-2">my github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
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
