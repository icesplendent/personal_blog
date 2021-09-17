<template>
  <div>
    <div>
      <v-app-bar
        app
        color="light-blue"
        dark
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          />
        </template>

        <v-app-bar-nav-icon @click="showappbar()">
          <!-- <v-avatar>
            <img src = "../assets/me.jpg" alt = "allen">
          </v-avatar> -->
        </v-app-bar-nav-icon>

        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-leaf</v-icon> Icesplendent
        </v-btn>

        <!-- <v-app-bar-title>Icesplendent</v-app-bar-title> -->

        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <v-navigation-drawer
      v-model="showAppBar"
      temporary
      app
      width="25%"
      class="nav"
    >
      <v-list style="float:left">
        <v-list-item>
          <v-list-item-avatar size="200">
            <v-img src="../assets/me_new.jpg" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>
              <h1>王柏涵 Allen</h1>
            </v-list-item-title>
            <v-list-item-subtitle>Icesplendent@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div style="clear:both;" />

      <v-divider />

      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="border"
          color="indigo"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>
                mdi-information
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title large>
              About
            </v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-tools</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-ship-wheel</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Activities</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
data() {
    return {
      showAppBar: false,
      barClass: false
    };
},
methods: {
  showappbar() {
    this.showAppBar = !this.showAppBar;
    this.barClass = !this.barClass;
  }
}
};
</script>

<style scoped>
.v-app-bar-title {
margin: auto;
}

#after {
  margin-left: 30%
}

.border {
  border: 2px dashed orange;
}
</style>
