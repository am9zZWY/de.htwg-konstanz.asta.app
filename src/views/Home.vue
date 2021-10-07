<template>
  <div class="tile-group">
    <tile tile-title="Speiseplan" tile-route-to="Mensa" />
    <tile-termine />
    <tile-drucker-konto />
    <tile tile-title="Noten" tile-route-to="Noten" />
    <tile tile-title="Endlicht" tile-route-to="Endlicht" deactivated />
    <tile-login />
    <tile tile-title="Campus Plan" tile-route-to="CampusPlan" />
  </div>
</template>

<script>
import TileDruckerKonto from "@/components/TileDruckerKonto";
import TileLogin from "@/components/TileLogin";
import TileTermine from "@/components/TileTermine";

export default {
  name: "Home",
  components: {
    TileDruckerKonto,
    TileLogin,
    TileTermine,
  },
};
</script>
