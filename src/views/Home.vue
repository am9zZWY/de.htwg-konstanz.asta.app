<template>
  <div class="tile-group">
    <tile
      is-wide
      tile-icon="ri-restaurant-line"
      tile-route-to="Canteen"
      tile-title="Speiseplan"
    />
    <tile
      is-deactivated
      tile-icon="ri-calendar-line"
      tile-route-to="Timetable"
      tile-title="Stundenplan"
    />
    <tile
      inverted
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
    <tile-login is-wide />
    <tile tile-route-to="About" tile-title="Über" />
  </div>
</template>

<script>
import TileDruckerKonto from "@/components/TileDruckerKonto";
import TileLogin from "@/components/TileLogin";
import TileTermine from "@/components/TileTermine";
import TileLibrary from "@/components/TileLibrary";

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
