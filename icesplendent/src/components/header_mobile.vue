/* eslint-disable space-before-blocks */
<template>
  <div>
    <v-app-bar app hide-on-scroll elevation="0">
      <div class="d-inline" style="width: 3vw" />

      <v-app-bar-nav-icon @click="showappbar()" />

      <v-btn plain>
        <v-icon left color="blue ligthen-1">
          mdi-hexagon-slice-6
        </v-icon>
        <span>ICESPLENDENT</span>
      </v-btn>

      <v-spacer />


      <v-spacer />

      <v-btn icon href="https://www.youtube.com/channel/UCOU6w20nYKaPCteaDjc8rXg">
        <v-icon color="red darken-2">
          mdi-youtube
        </v-icon>
      </v-btn>
      <v-btn icon href="https://www.facebook.com/profile.php?id=100004327542414">
        <v-icon color="blue darken-3">
          mdi-facebook
        </v-icon>
      </v-btn>
      <v-btn icon href="https://www.instagram.com/ice_splendent_123/">
        <v-icon color="pink darken-1">
          mdi-instagram
        </v-icon>
      </v-btn>
      <div class="d-inline" style="width: 3vw" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="showAppBar"
      absolute
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="../assets/ice.png" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>ICESPLEDNENT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />
      <v-list nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>ABOUT</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>BLOG</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        // MenuShow: false,
showAppBar: false,
        About: [
          { title: 'ABOUT' },
          { title: 'SKILL' },
          { title: 'ACTIVITY' }
        ]
      };
    },
methods: {
showappbar() {
this.showAppBar = !this.showAppBar;
}
}
  };
  </script>

  <style scoped>
  .scroll {
    transition: all 6s ease;
  }
  </style>
