<template>
  <div class="tile-group">
    <tile tile-title="Öffnungszeiten">
      <table id="timetable" aria-label="Öffnungszeiten der Bibliothek">
        <tr v-for="(day, index) in times" :key="weekdays[index]">
          <th scope="row">{{ weekdays[index] }}</th>
          <td v-if="day" id="openingTimes">{{ day[0] }} - {{ day[1] }}</td>
          <td v-else>Geschlossen</td>
        </tr>
      </table>
    </tile>
    <tile tile-title="Kontakt">
      Hochschulbibliothek der HTWG Konstanz
      <br />
      Gebäude K
      <br />
      Alfred-Wachtel-Straße 8
      <br />
      78462 Konstanz
      <br />
      <br />
      Tel: 07531/206-580
      <br />
      Fax: 07531/206-587
      <br />
      <a class="link decorate" href="mailto:bib-service@htwg-konstanz.de"
        >bib-service@htwg-konstanz.de</a
      >
    </tile>
  </div>
</template>

<script lang="ts">
import { get } from "@/helpers/fetchData";
import Tile from "@/components/tiles/TileComponent.vue";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { weekdays } from "@/helpers/dateHelper";

export default defineComponent({
  name: "View_Library",
  components: { Tile },
  setup() {
    const times: any = ref([]);
    const status: Ref<number> = ref(0);

    const getTimetable = async () => {
      const result = await get(
        "",
        "https://webapi.affluences.com/api/timetable?token=wWAjgowjn7iD85&week_offset=0&index=0"
      );
      status.value = result.status;
      times.value = result.content.times;
    };

    onMounted(getTimetable);
    return {
      weekdays,
      times,
    };
  },
});
</script>

<style scoped>
#timetable {
  width: 100%;
}

#timetable #openingTimes {
  text-align: right;
}
</style>
