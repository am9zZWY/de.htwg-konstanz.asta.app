<template>
  <tile
    inverted
    big-content
    tile-title="Bibliothek"
    tile-subtitle="Auslastung"
    tile-route-to="Library"
  >
    <template v-if="fillRate === -1">Geschlossen</template>
    <template v-else>{{ fillRate }}%</template>
  </tile>
</template>

<script>
export default {
  name: "TileTermine",
  data() {
    return {
      fillRate: -1,
    };
  },
  methods: {
    fetchFillRate: async function () {
      fetch("https://webapi.affluences.com/api/fillRate?token=6r3Kuo6JjNhH9e")
        .then((resp) => resp.json())
        .then((data) => {
          this.fillRate = data.progress;
        });
    },
  },
  mounted() {
    this.fetchFillRate();
  },
};
</script>
