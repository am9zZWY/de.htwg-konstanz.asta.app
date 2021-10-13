<template>
  <div class="tile-group">
    <template v-for="semester in semesters" :key="semester">
      <tile :tile-title="semester">
        <table
          :aria-describedby="`Tabelle mit Noten des ${semester}`"
          class="grades"
        >
          <tr>
            <th id="subject" class="subject">Fach</th>
            <th id="status" class="status">Status/Note</th>
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
import fetchData from "@/helpers/fetchData";

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
     * Map with all grades of a semester.
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
    /**
     * List of all semesters. Sorts them in case they aren't.
     * @returns {string[]}
     */
    semesters: function () {
      return Object.keys(this.gradePerSemester).sort((a, b) => {
        const semesterA = a.match(/(\d+\/\d+)|(\d+)/)[0];
        const semesterB = b.match(/(\d+\/\d+)|(\d+)/)[0];
        return semesterA.localeCompare(semesterB);
      });
    },
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/(\\n|\\t)/g, "").trim();
    },
    fetchNoten: async function () {
      const body = JSON.stringify({
        username: this.username || "",
        password: this.password || "",
        reqtype: "noten",
      });

      fetchData(
        (result) => {
          result.json().then((json) => {
            this.grades = json;
          });
        },
        {
          body: body,
        }
      );
    },
  },
  mounted() {
    this.fetchNoten();
  },
};
</script>
