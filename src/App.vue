<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="pt-2">
            <h3>Vuetify Todo</h3>
          </v-list-item-title>
          <v-list-item-subtitle class="py-2">
            <span>best todo ever !</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="it in items" :key="it" :to="it.to" link>
          <v-list-item-icon>
            <v-icon> {{ it.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ it.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- /////////////////////////////////////////////////////// -->

    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sara's Todo Application</v-toolbar-title>
    </v-app-bar> -->
    <!-- //////////////////////////////////// -->
    <!-- <v-app-bar 
       src="https://picsum.photos/1920/1080?random" 
       color="info" density="prominent">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>My Recent Trips</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-app-bar> -->

    <v-app-bar
      app
      color="primary"
      dark
      src="./assets/imgs/istockphoto-1421055831-612x612.jpg"
      prominent
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>

      <v-app-bar-title>Vuetify Todo ... </v-app-bar-title>

      <v-spacer></v-spacer>

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

    <!-- /////////////////////////////////////////////////////// -->

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        // { id: 1, title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { id: 1, title: "Dashboard", icon: "mdi-format-list-checks", to: "/" },
        { id: 2, title: "About", icon: "mdi-account", to: "/about" },
        { id: 3, title: "Star", icon: "mdi-star" },
      ],
    };
  },
};
</script>
