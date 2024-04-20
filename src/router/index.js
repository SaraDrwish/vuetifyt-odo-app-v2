import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";
import About from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: Todo,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
