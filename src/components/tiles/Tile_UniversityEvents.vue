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
import { dayAsWord, formatDate } from "@/helpers/dateHelper";
import Tile from "@/components/tiles/Tile.vue";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "TileUniversityEvents",
  components: { Tile },
  setup() {
    const today = ref(new Date());
    const date = computed(() => formatDate(today.value));
    const weekday = computed(() => dayAsWord(today.value));
    return {
      date,
      weekday,
    };
  },
});
</script>
