<template>
  <div class="tile-group">
    <tile tile-title="Öffnungszeiten">
      <table id="timetable" aria-label="Öffnungszeiten der Bibliothek">
        <tr v-for="(day, index) in times" :key="dayNames[index]">
          <th scope="row">{{ dayNames[index] }}</th>
          <td id="openingTimes">{{ day[0] }} - {{ day[1] }}</td>
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

<script>
export default {
  name: "Library",
  data() {
    return {
      dayNames: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
      times: [],
    };
  },
  methods: {
    fetchTimetable: async function () {
      fetch(
        "https://webapi.affluences.com/api/timetable?token=wWAjgowjn7iD85&week_offset=0&index=0"
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.times = data.times;
        });
    },
  },
  mounted() {
    this.fetchTimetable();
  },
};
</script>

<style scoped>
#timetable {
  width: 100%;
}

#timetable #openingTimes {
  text-align: right;
}
</style>
