<template>
  <div class="todo pa-6">
    <h1>Todo</h1>
    <!-- /// -->
    <!-- <v-list lines="three" select-strategy="classic">
        <v-list-subheader>General</v-list-subheader>

        <v-list-item value="notifications">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title>Notifications</v-list-item-title>

          <v-list-item-subtitle>
            Notify me about updates to apps or games that I downloaded
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item value="sound">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title>Sound</v-list-item-title>

          <v-list-item-subtitle>
            Auto-update apps at any time. Data charges may apply
          </v-list-item-subtitle>
        </v-list-item>

        <v-list-item value="widgets">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title>Auto-add widgets</v-list-item-title>

          <v-list-item-subtitle>
            Automatically add home screen widgets when downloads complete
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
       -->
    <!-- //////// -->
    <!-- <v-card max-width="600"> -->
    <!-- <v-card class="mx-auto" max-width="500"> -->
    <div v-for="ts in tasks" :key="ts.id">
      <v-list flat>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-title class="text-capitalize">
              {{ ts.title }}
            </v-list-item-title>
          </template>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </div>

    <!-- <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle
                >Auto-update apps at any time. Data charges may
                apply</v-list-item-subtitle
              >
            </v-list-item-content>
          </template>
        </v-list-item> -->

    <!-- </v-card> -->
    <!-- //////// -->
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      tasks: [
        { id: 1, title: "eat" },
        { id: 2, title: "weak up" },
        { id: 3, title: "study vue" },
      ],
    };
  },
};
</script>
