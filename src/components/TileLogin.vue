<template>
  <tile
    tile-title="Einloggen"
    :tile-subtitle="subTitle"
    tile-route-to="Login"
    inverted
  />
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TileLogin",
  computed: {
    ...mapState(["username"]),
    subTitle: function () {
      if (this.username !== "" || this.username !== null) {
        return `Hallo, ${this.username}!`;
      }
      return "Logge dich ein, um weitere Dienste zu verwenden";
    },
  },
};
</script>
