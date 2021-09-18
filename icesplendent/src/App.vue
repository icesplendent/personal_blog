/* eslint-disable vue/html-indent */
<template>
  <v-app>
    <app-header />
    <!-- <div style="height:64px" /> -->
    <app-content />
  </v-app>
</template>

<script>
import appheader from './components/header_PC.vue';
import appcontent from './components/content.vue';

export default {
  name: 'App',
  components: {
    'app-header': appheader,
    'app-content': appcontent
  },
  data() {
    return {

    };
  }

};
</script>
<style scoped>
/* #main_content {
  height: 1500px;
} */
.item-title {
  margin: auto;
}
.btn-info {
  height: 40px;
}
.about, .skill, .activity {
  width: 25%;
  background-color: blue;
}
#app {
  background: url('./assets/skycity.jpg') fixed center;
  background-size: cover;
}
</style>
