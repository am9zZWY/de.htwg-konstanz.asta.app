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
export default {
  name: "TileTermine",
  data() {
    return {
      weekdays: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
    };
  },
  computed: {
    today: function () {
      return new Date();
    },
    date: function () {
      return `${this.today.getDate()}.${
        this.today.getMonth() + 1
      }.${this.today.getFullYear()}`;
    },
    weekday: function () {
      return this.weekdays[this.today.getDay() - 1];
    },
  },
};
</script>
