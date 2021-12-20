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
import { post } from "@/helpers/fetchData";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

export default {
  name: "Timetable",
  setup() {
    const store = useStore();
    const username = computed(() => store.state.username);
    const password = computed(() => store.state.password);

    const timetable = ref("");
    const status = ref(0);

    const getTimetable = async () => {
      const body = JSON.stringify({
        username: username.value || "",
        password: password.value || "",
        reqtype: "stundenplan",
      });

      const result = await post(body);
      timetable.value = result.content;
      status.value = result.status;
    };

    onMounted(getTimetable);

    return {
      status,
      timetable,
    };
  },
};
</script>
