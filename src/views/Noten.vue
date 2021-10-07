<template>
  <table style="width: 100%" aria-describedby="Notenspiegel">
    <tr>
      <th id="pruefungsnummer">Prüfungsnummer</th>
      <th id="pruefungstext">Prüfungstext</th>
      <th id="semester">Semester</th>
      <th id="note">Note</th>
      <th id="ects">ECTS</th>
      <th id="status">Status</th>
    </tr>
    <template v-for="grade in grades" :key="grade.number">
      <tr>
        <td>{{ grade.number }}</td>
        <td>{{ grade.name }}</td>
        <td>{{ grade.semester }}</td>
        <td>{{ grade.grade }}</td>
        <td>{{ grade.ects }}</td>
        <td>{{ grade.status }}</td>
      </tr>
    </template>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Noten",
  data() {
    return {
      grades: [],
    };
  },
  computed: {
    ...mapState(["username", "password"]),
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/(\\n|\\t)/g, "");
    },
    fetchNoten: async function () {
      const body = {
        username: this.username || "",
        password: this.password || "",
        reqtype: "noten",
      };

      if (this.username !== "") {
        fetch(`https://htwg-app-back.herokuapp.com/`, {
          method: "POST",
          body: JSON.stringify(body),
        })
          .then((result) => result.json())
          .then((json) => (this.grades = json));
      }
    },
  },
  mounted() {
    this.fetchNoten();
  },
};
</script>
