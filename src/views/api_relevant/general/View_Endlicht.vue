<template>
  <tile-group tile-title="Endlicht">
    <tile tile-title="Endlicht Preise" :status="statusItems">
      <ol class="tile-list" aria-label="Endlicht Angebote">
        <li v-for="(item, index_item) in items" :key="index_item">
          {{ item.name }}: {{ item.price }}
        </li>
      </ol>
      <div class="left">* Auch Laktosefrei</div>
      <div class="left">** Pfand 1€</div>
      <div class="left">*** Pfand 0,25€</div>
    </tile>
    <tile
      is-inverted
      tile-title="Endlicht Öffnungszeiten"
      :status="statusTimes"
    >
      <div v-html="times" />
    </tile>
  </tile-group>
</template>

<script lang="ts">
import { get } from "@/helpers/fetchData";
import TileGroup from "@/components/tiles/TileGroup.vue";
import Tile from "@/components/tiles/TileComponent.vue";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { weekdays } from "@/helpers/dateHelper";

export default defineComponent({
  name: "View_Endlicht",
  components: { Tile, TileGroup },
  setup() {
    const items: any = ref([]);
    const times: any = ref("");
    const statusItems: Ref<number> = ref(0);
    const statusTimes: Ref<number> = ref(0);

    const getPrices = async () => {
      const result = await get("?endlicht&reqtype=preise");
      statusItems.value = result.status;
      items.value = result.content;
    };

    const getTimes = async () => {
      const result = await get("?endlicht&reqtype=zeiten");
      statusTimes.value = result.status;
      times.value = result.content;
    };

    onMounted(() => {
      getPrices();
      getTimes();
    });

    return {
      statusItems,
      statusTimes,
      times,
      items,
      weekdays,
    };
  },
});
</script>
