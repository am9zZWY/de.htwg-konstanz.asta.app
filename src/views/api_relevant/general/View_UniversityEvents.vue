<template>
  <tile is-inverted :status="status">
    <div id="termine" class="termine">
      <div v-html="html" />
    </div>
  </tile>
</template>

<script lang="ts">
import { get } from "@/helpers/fetchData";
import Tile from "@/components/tiles/TileComponent.vue";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { weekdays } from "@/helpers/dateHelper";

export default defineComponent({
  name: "View_UniversityEvents",
  components: { Tile },
  setup() {
    const html: any = ref("");
    const status: Ref<number> = ref(0);

    const fixLinks = () => {
      /* Modifies links so that they start from the official page of the HTWG */
      const termine = document.getElementById("termine");
      if (termine === null) {
        return;
      }
      let anchors = Array.from(termine.getElementsByTagName("a"));
      anchors.forEach((a) => {
        a.href = "https://www.htwg-konstanz.de" + a.pathname;
        a.target = "_blank";
      });
    };

    const getUniversityEvents = async () => {
      const result = await get("?termine");
      status.value = result.status;
      html.value = result.content;
      fixLinks();
    };

    onMounted(getUniversityEvents);

    return {
      weekdays,
      html,
      status,
    };
  },
});
</script>
