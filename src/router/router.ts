import { createRouter, createWebHashHistory, Router } from "vue-router";
import Home from "@/views/View_Home.vue";
import Canteen from "@/views/api_relevant/general/View_Canteen.vue";
import Timetable from "@/views/api_relevant/user_related/View_Timetable.vue";

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
      import(/* webpackChunkName: "health" */ "@/views/View_Health.vue"),
  },
  {
    path: "/Termine",
    name: "Termine",
    component: () =>
      import(
        /* webpackChunkName: "termine" */ "@/views/api_relevant/general/View_UniversityEvents.vue"
      ),
  },
  {
    path: "/Grades",
    name: "Grades",
    component: () =>
      import(
        /* webpackChunkName: "grades" */ "@/views/api_relevant/user_related/View_Grades.vue"
      ),
  },
  {
    path: "/Endlicht",
    name: "Endlicht",
    component: () =>
      import(
        /* webpackChunkName: "endlicht" */ "@/views/api_relevant/general/View_Endlicht.vue"
      ),
  },
  {
    path: "/Library",
    name: "Library",
    component: () =>
      import(
        /* webpackChunkName: "library" */ "@/views/api_relevant/general/View_Library.vue"
      ),
  },
  {
    path: "/CampusPlan",
    name: "CampusPlan",
    component: () =>
      import(
        /* webpackChunkName: "campus-plan" */ "@/views/View_CampusPlan.vue"
      ),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "login" */ "@/views/api_relevant/user_related/View_Login.vue"
      ),
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/View_About.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
