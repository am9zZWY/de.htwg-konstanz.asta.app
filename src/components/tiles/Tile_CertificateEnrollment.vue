<template>
  <tile tile-title="Immatrikulationsbescheinigung" is-inverted>
    <button
      :class="['button', { disabled: wait }]"
      @click="download"
      :aria-busy="wait"
      :aria-disabled="wait"
      aria-label="Immatrikulationsbescheinigung herunterladen"
      role="button"
    >
      <template v-if="wait && status === 0"> Bitte warten ...</template>
      <template v-else-if="status !== 0 && status !== 200"
        >Ein Fehler ist aufgetreten
      </template>
      <template v-else>Herunterladen</template>
    </button>
  </tile>
</template>

<script lang="ts">
import Tile from "@/components/tiles/Tile.vue";
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";
import { raw_post } from "@/helpers/fetchData";

export default defineComponent({
  name: "TileCertificateEnrollment",
  components: { Tile },
  setup() {
    const store = useStore();
    const wait = ref(false);
    const status = ref(0);
    const download = () => {
      wait.value = true;
      const username = computed(() => store?.state?.username);
      const password = computed(() => store?.state?.password);

      const body = JSON.stringify({
        username: username.value || "",
        password: password.value || "",
        reqtype: "immatrikulations_bescheinigung",
      });

      raw_post(body).then((result) => {
        if (result.status === 200) {
          // ok
          return result.blob().then((blob) => {
            wait.value = false;
            status.value = 200;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Immatrikulations_Bescheinigung.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
        } else {
          /* error e.g. not logged in */
          status.value = -1;
          wait.value = false;
        }
      });
    };
    return {
      wait,
      status,
      download,
    };
  },
});
</script>
