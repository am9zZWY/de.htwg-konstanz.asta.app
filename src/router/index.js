import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Mensa from "../views/Mensa.vue";

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
    component: Mensa,
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
  {
    path: "/About",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
