<template>
  <div class="todo pa-2">
    <!-- <h1>Todo</h1> -->

    <div v-for="ts in tasks" :key="ts.id">
      <v-list flat class="pa-0 ma-0">
        <!-- <v-list-item-group> -->
        <v-list-item
          :class="{ 'green lighten-5': ts.done }"
          @click="doneTask(ts.id)"
        >
          <!-- <template v-slot:default> -->
          <v-list-item-action>
            <v-checkbox :input-value="ts.done"></v-checkbox>
          </v-list-item-action>

          <v-list-item-title class="text-capitalize">
            {{ ts.title }}
          </v-list-item-title>
          <!-- </template> -->
        </v-list-item>
        <!-- </v-list-item-group> -->
      </v-list>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      tasks: [
        { id: 1, title: "eat", done: false },
        { id: 2, title: "weak up", done: true },
        { id: 3, title: "study vue", done: false },
      ],
    };
  },
  methods: {
    doneTask(id) {
      const taskchosen = this.tasks.filter((el) => el.id === id)[0];
      taskchosen.done = !taskchosen.done;
      console.log(taskchosen.done);
      // console.log("doneTask", id);
    },
  },
};
</script>
