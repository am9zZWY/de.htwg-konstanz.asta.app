import { createRouter, createWebHashHistory, Router } from "vue-router";
import Home from "@/views/Home.vue";
import Canteen from "@/views/Canteen.vue";
import Timetable from "@/views/Timetable.vue";

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
    path: "/Timetable",
    name: "Timetable",
    component: Timetable,
  },
  {
    path: "/Health",
    name: "Health",
    component: () =>
      import(/* webpackChunkName: "health" */ "@/views/Health.vue"),
  },
  {
    path: "/Termine",
    name: "Termine",
    component: () =>
      import(/* webpackChunkName: "termine" */ "@/views/Termine.vue"),
  },
  {
    path: "/Grades",
    name: "Grades",
    component: () =>
      import(/* webpackChunkName: "grades" */ "@/views/Grades.vue"),
  },
  {
    path: "/Endlicht",
    name: "Endlicht",
    component: () =>
      import(/* webpackChunkName: "endlicht" */ "@/views/Endlicht.vue"),
  },
  {
    path: "/Library",
    name: "Library",
    component: () =>
      import(/* webpackChunkName: "library" */ "@/views/Library.vue"),
  },
  {
    path: "/CampusPlan",
    name: "CampusPlan",
    component: () =>
      import(/* webpackChunkName: "campus-plan" */ "@/views/CampusPlan.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
