<template>
  <tile-group :status="status" tile-title="Endlicht">
    <tile tile-title="Endlicht Preise">
      <ol class="tile-list" aria-label="Endlicht Angebote">
        <li v-for="(item, index_item) in items" :key="index_item">
          {{ item.name }}: {{ item.price }}
        </li>
      </ol>
      <div class="left">* Auch Laktosefrei</div>
      <div class="left">** Pfand 1€</div>
      <div class="left">*** Pfand 0,25€</div>
    </tile>
    <tile is-inverted tile-title="Endlicht Öffnungszeiten">
      <div v-html="times" />
    </tile>
  </tile-group>
</template>

<script>
import { get } from "@/helpers/fetchData";
import TileGroup from "@/components/tiles/TileGroup";

export default {
  name: "Endlicht",
  components: { TileGroup },
  data() {
    return {
      items: [],
      times: "",
      status: 0,
    };
  },
  methods: {
    getPrices: function () {
      get("?endlicht&reqtype=preise").then(({ content, status }) => {
        this.status = status;
        this.items = content;
      });
    },
    getTimes: function () {
      get("?endlicht&reqtype=zeiten").then(({ content, status }) => {
        this.status = status;
        this.times = content;
      });
    },
  },
  mounted() {
    this.getPrices();
    this.getTimes();
  },
};
</script>
