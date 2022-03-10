<template>
  <div class="tile-group">
    <tile tile-title="Campus Plan">
      <img
        alt="Campus Plan"
        src="https://www.htwg-konstanz.de/fileadmin/pub/allgemein/Campusplan/Campusplan_2017_3.PNG"
      />
    </tile>
    <tile tile-title="Adresse" is-inverted>
      Hochschule Konstanz<br />
      Alfred-Wachtel-Straße 8<br />
      78462 Konstanz<br />
      Deutschland<br />
    </tile>
    <tile tile-title="Öffnungszeiten">
      <table style="width: 100%" aria-describedby="Öffnungszeiten der HTWG">
        <tr>
          <th id="day">Tag</th>
          <th id="times">Uhrzeiten</th>
        </tr>
        <tr>
          <td>Mo - Fr</td>
          <td>06:30 - 20:30</td>
        </tr>
        <tr>
          <td>Sa</td>
          <td>8 - 18</td>
        </tr>
        <tr>
          <td>So</td>
          <td>Geschlossen</td>
        </tr>
      </table>
    </tile>
  </div>
</template>

<script lang="ts">
import Tile from "@/components/tiles/TileComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "View_CampusPlan",
  components: { Tile },
});
</script>
