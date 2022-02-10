<template>
  <div class="tile-group">
    <tile is-inverted :status="status">
      <div id="termine" class="termine">
        <div v-html="html" />
      </div>
    </tile>
  </div>
</template>

<script lang="ts">
import { get } from "@/helpers/fetchData";
import Tile from "@/components/tiles/Tile.vue";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { weekdays } from "@/helpers/dateHelper";

export default defineComponent({
  name: "View_UniversityEvents",
  components: { Tile },
  data() {
    return {
      html: "",
      status: 0,
    };
  },
  setup() {
    const times: any = ref([]);
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
      times.value = result.content.times;
      fixLinks();
    };

    onMounted(getUniversityEvents);
    return {
      weekdays,
      times,
    };
  },
});
</script>
