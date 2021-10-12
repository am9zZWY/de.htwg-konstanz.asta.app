<template>
  <div class="tile-group">
    <tile tile-title="Speiseplan" tile-route-to="Mensa" />
    <tile tile-title="Stundenplan" tile-route-to="Stundenplan" deactivated />
    <tile tile-title="Campus Plan" tile-route-to="CampusPlan" />
    <tile tile-title="Noten" tile-route-to="Noten" />
    <tile-drucker-konto />
    <tile-termine />
    <tile tile-title="Endlicht" tile-route-to="Endlicht" deactivated />
    <tile-login />
    <tile tile-title="Über" tile-route-to="About" />
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
