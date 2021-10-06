import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/Home"],
  },
  {
    path: "/Mensa",
    name: "Mensa",
    component: () => import(/* webpackChunkName: "mensa" */ "../views/Mensa"),
  },
  {
    path: "/Termine",
    name: "Termine",
    component: () =>
      import(/* webpackChunkName: "termine" */ "../views/Termine"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
