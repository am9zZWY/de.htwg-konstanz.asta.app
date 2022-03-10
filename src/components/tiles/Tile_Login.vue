<template>
  <tile
    :tile-subtitle="greeting"
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
import { nullOrUndefined } from "@/helpers/checks";

export default defineComponent({
  name: "TileLogin",
  components: { Tile },
  setup() {
    const store = useStore();
    const username = computed(() => store.state.username);
    const isLoggedIn = computed(
      () => username.value !== "" && !nullOrUndefined(username.value)
    );
    const greeting = computed(() =>
      isLoggedIn.value
        ? "Hallo!"
        : "Logge dich ein, um Dienste des Rechenzentrums zu verwenden"
    );

    return {
      greeting,
    };
  },
});
</script>
