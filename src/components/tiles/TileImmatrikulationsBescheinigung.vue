<template>
  <tile tile-title="Immatrikulations Bescheinigung" is-inverted>
    <button :class="['button', { disabled: wait }]" @click="download">
      <template v-if="wait"> Bitte warten ...</template>
      <template v-else>Herunterladen</template>
    </button>
  </tile>
</template>

<script lang="ts">
import Tile from "@/components/tiles/Tile.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {raw_post} from "@/helpers/fetchData";

export default {
  name: "TileImmatrikulationsBescheinigung",
  components: {Tile},
  setup() {
    const store = useStore();
    const wait = ref(false);
    const download = () => {
      wait.value = true;
      const username = computed(() => store?.state?.username);
      const password = computed(() => store?.state?.password);

      const body = JSON.stringify({
        username: username.value || "",
        password: password.value || "",
        reqtype: "immatrikulations_bescheinigung",
      });

      raw_post(body)
          .then((result) => result.blob())
          .then((blob) => {
            wait.value = false;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Immatrikulations_Bescheinigung.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
    };
    return {
      wait,
      download,
    };
  },
};
</script>
