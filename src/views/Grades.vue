<template>
  <div>
    <button class="button dark-bg" @click="changeOrder">
      Sortierung ändern
    </button>
  </div>
  <tile-group :status="status" tile-title="Noten">
    <template v-for="semester in semesters" :key="semester">
      <tile
        :tile-title="semester"
        :tile-subtitle="`${calcECTS(gradePerSemester[semester])} ECTS-Punkte`"
      >
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
  </tile-group>
</template>

<script>
import { mapState } from "vuex";
import { post } from "@/helpers/fetchData";
import TileGroup from "@/components/tiles/TileGroup";

export default {
  name: "Noten",
  components: { TileGroup },
  data() {
    return {
      grades: [],
      order: 1,
      status: 0,
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
        if (this.order === 1) {
          return semesterA.localeCompare(semesterB);
        } else {
          return semesterB.localeCompare(semesterA);
        }
      });
    },
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/(\\n|\\t)/g, "").trim();
    },
    changeOrder: function () {
      this.order *= -1;
    },
    calcECTS: function (grades) {
      return grades.reduce((ects, grade) => parseInt(grade.ects) + ects, 0);
    },
    fetchNoten: async function () {
      const body = JSON.stringify({
        username: this.username || "",
        password: this.password || "",
        reqtype: "noten",
      });

      post(body).then(({ content, status }) => {
        this.grades = content;
        this.status = status;
      });
    },
  },
  mounted() {
    this.fetchNoten();
  },
  watch: {
    username() {
      this.fetchNoten();
    },
  },
};
</script>
