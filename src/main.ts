import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import { store } from "@/store/store";

/* init app */
const app = createApp(App);

/* register store and router */
app.use(store);
app.use(router);

/* mount app at id app */
app.mount("#app");
