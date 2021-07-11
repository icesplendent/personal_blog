/* eslint-disable vue/html-indent */
<template>
  <v-app>
    <app-header />
    <div style="height:64px" />
    <v-container grid-list-md>
      <v-layout justify-space-between>
        <v-flex>
          <v-card about>
            <v-card-title>About</v-card-title>
            <v-card-text class="flex">
              出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card skill>
            <v-card-title>Skill</v-card-title>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
                <v-list-item-title v-text="item.text" />
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card activity>
            <v-card-title>Activity</v-card-title>
            <v-card-text class="flex">
              出於對電機資訊相關的熱情，於⾼中便開始參與資訊社以接觸相關領域。在進入⼤學後更是積極突破，除了在課業上的努⼒，更是多⽅參與活動，再精進⾃我技能的同時，也開拓我的視野。
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import appheader from './components/header.vue';

export default {
  name: 'App',
  components: {
    'app-header': appheader
  },
  data() {
    return {
      items: [
        { text: 'C', icon: 'mdi-alpha-c' },
        { text: 'Verilog', icon: 'mdi-alpha-v' },
        { text: 'CSS', icon: 'mdi-language-css3' },
        { text: 'Javascript', icon: 'mdi-language-javascript' },
        { text: 'Vue', icon: 'mdi-vuejs' }
      ]
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
</style>
