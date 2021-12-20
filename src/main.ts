import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store/store";

/* import components */
import Tile from "@/components/tiles/Tile.vue";
import TileWait from "@/components/tiles/TileWait.vue";

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
