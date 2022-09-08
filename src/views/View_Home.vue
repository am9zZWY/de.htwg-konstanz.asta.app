<template>
  <div class="tile-group">
    <tile
      tile-icon="ri-restaurant-line"
      tile-route-to="Canteen"
      tile-title="Speiseplan"
    />
    <tile-login />
    <tile
      tile-icon="ri-calendar-line"
      tile-route-to="Timetable"
      tile-title="Stundenplan"
    />
    <tile
      tile-route-to="Grades"
      tile-title="Noten"
      tile-subtitle="Eine Übersicht über deine bisherigen Leistungen"
    />
    <tile-certificate-enrollment />
    <tile-printer-account />
    <tile-library />
    <tile-university-events />
    <tile
      tile-icon="ri-map-2-line"
      tile-route-to="CampusPlan"
      tile-title="Campus Plan"
    />
    <tile
      tile-icon="ri-mental-health-line"
      tile-route-to="Health"
      tile-title="Gesundheit"
    />
    <tile
      tile-icon="ri-cup-line"
      tile-route-to="Endlicht"
      tile-title="Endlicht"
    />
    <tile tile-route-to="About" tile-title="Über" />
  </div>
</template>

<script lang="ts">
import TileLogin from "@/components/tiles/Tile_Login.vue";
import TileLibrary from "@/components/tiles/Tile_Library.vue";
import Tile from "@/components/tiles/TileComponent.vue";
import TileCertificateEnrollment from "@/components/tiles/Tile_CertificateEnrollment.vue";
import TilePrinterAccount from "@/components/tiles/Tile_PrinterAccount.vue";
import TileUniversityEvents from "@/components/tiles/Tile_UniversityEvents.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "View_Home",
  components: {
    TileUniversityEvents,
    TilePrinterAccount,
    TileCertificateEnrollment,
    Tile,
    TileLibrary,
    TileLogin,
  },
});
</script>
