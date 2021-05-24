/* eslint-disable vue/html-indent */
<template>
  <v-app>
    <app-header />
    <div id="main_content">
      <h1>About</h1>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <h1>hi</h1>
    </div>
  </v-app>
</template>

<script>
import appheader from './components/header.vue';

export default {
  name: 'App',
  components: {
    'app-header': appheader
  }

};
</script>
<style scoped>
#main_content {
  margin-left: 30%;
  height: 1500px;
}
.item-title {
  margin: auto;
}
.btn-info {
  height: 40px;
}
</style>
