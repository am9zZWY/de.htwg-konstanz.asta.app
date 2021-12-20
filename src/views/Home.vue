<template>
  <div class="tile-group">
    <tile
      tile-icon="ri-restaurant-line"
      tile-route-to="Canteen"
      tile-title="Speiseplan"
    />
    <tile
      tile-icon="ri-calendar-line"
      tile-route-to="Timetable"
      tile-title="Stundenplan"
    />
    <tile
      is-inverted
      tile-icon="ri-mental-health-line"
      tile-route-to="Health"
      tile-title="Gesundheit"
    />
    <tile
      tile-icon="ri-map-2-line"
      tile-route-to="CampusPlan"
      tile-title="Campus Plan"
    />
    <tile
      tile-route-to="Grades"
      tile-title="Noten"
      tile-subtitle="Eine Übersicht über deine bisherigen Leistungen"
    />
    <tile-drucker-konto />
    <tile-library />
    <tile-termine />
    <tile
      tile-icon="ri-cup-line"
      tile-route-to="Endlicht"
      tile-title="Endlicht"
    />
    <tile-login />
    <tile tile-route-to="About" tile-title="Über" />
  </div>
</template>

<script>
import TileDruckerKonto from "@/components/tiles/TileDruckerKonto.vue";
import TileLogin from "@/components/tiles/TileLogin.vue";
import TileTermine from "@/components/tiles/TileTermine.vue";
import TileLibrary from "@/components/tiles/TileLibrary.vue";

export default {
  name: "Home",
  components: {
    TileDruckerKonto,
    TileLibrary,
    TileLogin,
    TileTermine,
  },
};
</script>
