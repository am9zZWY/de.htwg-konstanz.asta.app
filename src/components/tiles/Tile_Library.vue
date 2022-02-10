<template>
  <tile
    is-inverted
    big-content
    tile-title="Bibliothek"
    tile-subtitle="Auslastung"
    tile-route-to="Library"
  >
    <template v-if="fillRate === -1">Geschlossen</template>
    <template v-else>{{ fillRate }}%</template>
  </tile>
</template>

<script lang="ts">
import { get } from "@/helpers/fetchData";
import { onMounted, Ref, ref } from "vue";
import Tile from "@/components/tiles/Tile.vue";

export default {
  name: "TileLibrary",
  components: { Tile },
  setup() {
    const fillRate: Ref<number> = ref(-1);
    const status: Ref<number> = ref(0);

    const getFillrate = async () => {
      const result = await get(
        "",
        "https://webapi.affluences.com/api/fillRate?token=6r3Kuo6JjNhH9e"
      );
      status.value = result.status;
      fillRate.value = result.content.progress;
    };

    onMounted(getFillrate);
    return {
      fillRate,
    };
  },
};
</script>
