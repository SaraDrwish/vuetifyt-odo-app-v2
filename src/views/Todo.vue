<template>
  <div class="todo pa-2">
    <div v-for="ts in tasks" :key="ts.id">
      <v-list flat class="text-capitalize pa-0 ma-0">
        <v-list-item
          :class="{ 'green lighten-5': ts.done }"
          @click="doneTask(ts.id)"
        >
          <!-- <template v-slot:default> -->
          <v-list-item-action>
            <v-checkbox :input-value="ts.done"></v-checkbox>
          </v-list-item-action>
          <!--
            :class="
              ts.done == true ? 'text-decoration-line-through' : 'red--text' "-->

          <!-- <v-list-item-content> -->
          <v-list-item-title
            :class="{ 'text-decoration-line-through': ts.done }"
          >
            {{ ts.title }}
          </v-list-item-title>
          <!-- </v-list-item-content> -->

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-2">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
          <!-- </template> -->
        </v-list-item>
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
