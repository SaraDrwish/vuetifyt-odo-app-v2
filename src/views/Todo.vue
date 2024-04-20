<template>
  <div class="todo pa-2">
    <v-container>
      <div class="">
        <v-text-field
          @click:append="addTask"
          @keyup.enter="addTask"
          v-model="newTask"
          outlined
          color="orange"
          label="Add Task"
          append-icon="mdi-plus"
          hide-details
          clearable
        >
        </v-text-field>
      </div>

      <!-- //// -->

      <div v-for="ts in tasks" :key="ts.id">
        <v-list flat class="text-capitalize pa-0 ma-0">
          <v-list-item
            :class="{ 'green lighten-5': ts.done }"
            @click="doneTask(ts.id)"
          >
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox :input-value="ts.done"></v-checkbox>
              </v-list-item-action>
              <!--
            :class="
              ts.done == true ? 'text-decoration-line-through' : 'red--text' "-->

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': ts.done }"
                >
                  {{ ts.title }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon @click="delTsk(ts.id)">
                  <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Todo",
  newTask: " ",
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
      // console.log(taskchosen.done);
      // console.log("doneTask", id);
    },
    delTsk(id) {
      this.tasks = this.tasks.filter((el) => el.id !== id);
      // console.log("delTsk");
    },
    addTask() {
      const newTaskAdded = {
        id: Date.now(),
        title: this.newTask,
        done: false,
      };
      this.tasks.push(newTaskAdded);
      this.newTask = "";
    },
  },
};
</script>
