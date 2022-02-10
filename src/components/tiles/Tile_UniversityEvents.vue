<template>
  <tile
    big-content
    tile-route-to="Termine"
    tile-title="Termine"
    :tile-subtitle="weekday"
  >
    {{ date }}
  </tile>
</template>

<script lang="ts">
import { dayAsWord, formatDate } from "@/helpers/dateHelper.ts";
import Tile from "@/components/tiles/Tile.vue";

export default {
  name: "TileUniversityEvents",
  components: { Tile },
  computed: {
    today: function () {
      return new Date();
    },
    date: function () {
      return formatDate(this.today);
    },
    weekday: function () {
      return dayAsWord(this.today);
    },
  },
};
</script>
