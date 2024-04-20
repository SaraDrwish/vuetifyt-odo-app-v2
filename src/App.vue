<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <h3>Vuetify Todo</h3>
          </v-list-item-title>
          <v-list-item-subtitle>
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sara's Todo Application</v-toolbar-title>
    </v-app-bar>

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
