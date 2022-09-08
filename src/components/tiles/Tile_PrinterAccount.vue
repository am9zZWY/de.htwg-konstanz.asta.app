<template>
  <tile
    require-login
    :status="status"
    big-content
    is-inverted
    tile-subtitle="Druckerkonto"
    tile-title="Guthaben"
  >
    <em class="ri-printer-line icon" />
    {{ tileText }}
  </tile>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect } from "vue";
import { get_content_via_post } from "@/helpers/post";
import { useStore } from "vuex";
import Tile from "@/components/tiles/TileComponent.vue";

export default defineComponent({
  name: "TilePrinterAccount",
  components: { Tile },
  setup() {
    const tileText = ref("");
    const status = ref(0);

    const store = useStore();

    const getDruckerGuthaben = async () => {
      const result = await get_content_via_post("drucker", store);
      tileText.value = result.content.replace(/,/, ".") + "€";
      status.value = result.status;
    };

    onMounted(getDruckerGuthaben);

    watchEffect(getDruckerGuthaben);

    return {
      status,
      tileText,
    };
  },
});
</script>
