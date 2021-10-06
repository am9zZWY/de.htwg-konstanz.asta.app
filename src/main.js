import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* import components */
import Tile from "@/components/Tile";
import TileWait from "@/components/TileWait";

/* init app */
const app = createApp(App);

/* register global components */
app.component("Tile", Tile);
app.component("TileWait", TileWait);

/* register store and router */
app.use(store);
app.use(router);

/* mount app at id app */
app.mount("#app");
