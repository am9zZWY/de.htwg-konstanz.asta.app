<template>
  <div class="tile-group">
    <tile tile-title="Speiseplan" tile-route-to="Mensa" />
    <tile tile-title="Termine" tile-route-to="Calendar" deactivated />
    <tile-drucker-konto tile-title="Guthaben" />
    <tile tile-title="Noten" tile-route-to="Grades" deactivated />
    <tile tile-title="Endlicht" tile-route-to="Endlicht" deactivated />
    <tile tile-title="Einloggen" tile-route-to="Login" inverted />
  </div>
</template>

<script>
import TileDruckerKonto from "@/components/TileDruckerKonto";

export default {
  name: "Home",
  components: {
    TileDruckerKonto,
  },
};
</script>
