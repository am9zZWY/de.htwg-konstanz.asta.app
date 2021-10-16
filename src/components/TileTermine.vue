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

<script>
import { weekday, date } from "@/helpers/date";

export default {
  name: "TileTermine",
  computed: {
    today: function () {
      return new Date();
    },
    date: function () {
      return date(this.today);
    },
    weekday: function () {
      return weekday(this.today);
    },
  },
};
</script>
