<template>
  <v-app-bar app hide-on-scroll elevation="0">
    <div class="d-inline" style="width: 3vw" />

    <v-btn plain>
      <v-icon left color="blue ligthen-1">
        mdi-hexagon-slice-6
      </v-icon>
      <span>ICESPLENDENT</span>
    </v-btn>

    <v-spacer />
    <v-menu offset-y open-on-hover transition="slide-y-transition" class="scroll">
      <template
        v-slot:activator="{ on }"
      >
        <v-btn plain v-on="on">
          <v-icon left>
            mdi-chevron-down
          </v-icon>
          <span>About</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in About" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div
      class="d-inline"
      style="width:6vw"
    />
    <v-btn
      plain
    >
      <v-icon left>
        mdi-chevron-down
      </v-icon>
      <span>BLOG</span>
    </v-btn>

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
</template>

  <script>
  export default {
    data() {
      return {
        // MenuShow: false,
        About: [
          { title: 'ABOUT' },
          { title: 'SKILL' },
          { title: 'ACTIVITY' }
        ]
      };
    }
  };
  </script>

  <style scoped>
  .scroll {
    transition: all 6s ease;
  }
  </style>
