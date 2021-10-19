import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Canteen from "@/views/Canteen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/Home"],
  },
  {
    path: "/Canteen",
    name: "Canteen",
    component: Canteen,
  },
  {
    path: "/Health",
    name: "Health",
    component: () => import(/* webpackChunkName: "health" */ "@/views/Health"),
  },
  {
    path: "/Termine",
    name: "Termine",
    component: () =>
      import(/* webpackChunkName: "termine" */ "@/views/Termine"),
  },
  {
    path: "/Grades",
    name: "Grades",
    component: () => import(/* webpackChunkName: "grades" */ "@/views/Grades"),
  },
  {
    path: "/Endlicht",
    name: "Endlicht",
    component: () =>
      import(/* webpackChunkName: "endlicht" */ "@/views/Endlicht"),
  },
  {
    path: "/CampusPlan",
    name: "CampusPlan",
    component: () =>
      import(/* webpackChunkName: "campus-plan" */ "@/views/CampusPlan"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
