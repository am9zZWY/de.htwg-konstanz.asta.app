<template>
  <div>
    <tile is-inverted :status="status">
      <div id="termine" class="timetable">
        <div v-html="timetable" />
      </div>
    </tile>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import get_content_via_post from "@/helpers/post";
import { useStore } from "vuex";

export default {
  name: "Timetable",
  setup() {
    const timetable = ref("");
    const status = ref(0);

    const store = useStore();

    const getTimetable = async () => {
      const result = await get_content_via_post("stundenplan", store);
      timetable.value = result.content;
      status.value = result.status;
    };

    onMounted(getTimetable);
    watchEffect(getTimetable);

    return {
      status,
      timetable,
    };
  },
};
</script>
