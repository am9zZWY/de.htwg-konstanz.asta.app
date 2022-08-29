<template>
  <tile
    :tile-subtitle="tileText"
    is-inverted
    tile-icon="ri-login-box-line"
    tile-route-to="Login"
    tile-title="Einloggen"
  />
</template>

<script lang="ts">
import { useStore } from "vuex";
import Tile from "@/components/tiles/TileComponent.vue";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TileLogin",
  components: { Tile },
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const tileText = computed(() =>
      isLoggedIn.value
        ? "Hallo!"
        : "Logge dich ein, um Dienste des Rechenzentrums zu verwenden"
    );

    return {
      tileText,
    };
  },
});
</script>
