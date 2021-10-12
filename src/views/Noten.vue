<template>
  <div class="tile-group">
    <template v-for="semester in semesters" :key="semester">
      <tile :tile-title="semester">
        <table class="grades" :aria-describedby="`Tabelle mit Noten des ${semester}`">
          <tr>
            <th class="subject" id="subject">Fach</th>
            <th class="status" id="status">Status/Note</th>
          </tr>
          <tr
            v-for="grade in gradePerSemester[semester]"
            :key="grade.number"
            class="grade"
          >
            <td class="subject">{{ grade.name }}</td>
            <td class="status">
              <template v-if="cleanString(grade.grade) === ''">
                {{ cleanString(grade.status) }}
              </template>
              <template v-else>
                {{ cleanString(grade.grade) }}
              </template>
            </td>
          </tr>
        </table>
      </tile>
    </template>
  </div>
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
    /**
     * Return map with all grades of a semester.
     * @returns {{}}
     */
    gradePerSemester: function () {
      let gradePerSemester = {};
      this.grades.forEach((grade) => {
        const semester = this.cleanString(grade.semester);
        // check if semester is already a key of gradePerSemester
        if (!(semester in gradePerSemester)) {
          gradePerSemester[semester] = [];
        }

        // add grade to semester
        // clean all values of grade
        gradePerSemester[semester].push(
          Object.assign(
            {},
            ...Object.entries(grade).map(([k, v]) => ({
              [this.cleanString(k)]: this.cleanString(v),
            }))
          )
        );
      });
      return gradePerSemester;
    },
    semesters: function () {
      return Object.keys(this.gradePerSemester);
    },
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/(\\n|\\t)/g, "").trim();
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
