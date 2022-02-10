<template>
  <tile
    :tile-subtitle="greeting"
    is-inverted
    tile-icon="ri-login-box-line"
    tile-route-to="Login"
    tile-title="Einloggen"
  />
</template>

<script>
import { mapState } from "vuex";
import Tile from "@/components/tiles/Tile";

export default {
  name: "TileLogin",
  components: { Tile },
  computed: {
    ...mapState(["username"]),
    isLoggedIn: function () {
      return (
        this.username !== "" &&
        this.username !== null &&
        typeof this.username !== "undefined"
      );
    },
    greeting: function () {
      return this.isLoggedIn
        ? `Hallo!`
        : "Logge dich ein, um Dienste des Rechenzentrums zu verwenden";
    },
  },
};
</script>
