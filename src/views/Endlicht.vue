<template>
  <div class="tile-group">
    <tile tile-title="Endlicht Preise">
      <ul class="tile-list">
        <li v-for="(item, index_item) in items" :key="index_item">
          {{ item.name }}: {{ item.price }}
        </li>
      </ul>
      <div class="left">* Auch Laktosefrei</div>
      <div class="left">** Pfand 1€</div>
    </tile>
    <tile is-inverted tile-title="Endlicht Öffnungszeiten">
      <div v-html="times" />
    </tile>
  </div>
</template>

<script>
import fetchData from "@/helpers/fetchData";

export default {
  name: "Endlicht",
  data() {
    return {
      requestAdress: "https://htwg-app-back.herokuapp.com/?endlicht&reqtype=",
      items: [],
      times: "",
    };
  },
  methods: {
    getPrices: function () {
      fetchData((result) => {
        result.json().then((json) => {
          this.items = json;
        });
      }, this.requestAdress + "preise");
    },
    getTimes: function () {
      fetchData((result) => {
        result.text().then((json) => {
          this.times = json;
        });
      }, this.requestAdress + "zeiten");
    },
  },
  created() {
    this.getPrices();
    this.getTimes();
  },
};
</script>
