<template>
  <div>
    <button class="button dark-bg" role="button" @click="changeOrder">
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

<script lang="ts">
import TileGroup from "@/components/tiles/TileGroup.vue";
import {
  computed,
  defineComponent,
  onMounted,
  Ref,
  ref,
  watchEffect,
} from "vue";
import { nullOrUndefined } from "@/helpers/checks";
import get_content_via_post from "@/helpers/post";
import { useStore } from "vuex";
import Tile from "@/components/tiles/TileComponent.vue";

export default defineComponent({
  name: "View_Grades",
  components: { Tile, TileGroup },
  setup() {
    type Grade = {
      semester: string;
      name: string;
      status: string;
      ects: string;
    };

    const order: Ref<number> = ref(1);
    const grades: Ref<Grade[]> = ref([]);
    const status: Ref<number> = ref(0);

    const store = useStore();

    const getGrades = async () => {
      const result = await get_content_via_post("noten", store);
      grades.value = result.content as Grade[];
      status.value = result.status;
    };

    const cleanString = (str: string) => str.replace(/(\\n|\\t)/g, "").trim();

    const calcECTS = (grades: Grade[]) =>
      grades.reduce((ects, grade) => parseInt(grade.ects) + ects, 0);

    const changeOrder = () => (order.value *= -1);

    const gradePerSemester = computed(() => {
      return grades.value.reduce((map: any, grade: Grade) => {
        if (!(grade.semester in map)) {
          map[grade.semester] = [];
        }
        map[grade.semester].push(
          Object.assign(
            {},
            ...Object.entries(grade).map(([k, v]) => ({
              [cleanString(k)]: cleanString(v),
            }))
          )
        );
        return map;
      }, {});
    });

    const semesters = computed(() =>
      Object.keys(gradePerSemester.value).sort((a, b) => {
        const semesterA = a.match(/(\d+\/\d+)|(\d+)/);
        const semesterB = b.match(/(\d+\/\d+)|(\d+)/);
        if (!nullOrUndefined(semesterA) && !nullOrUndefined(semesterB)) {
          if (order.value === 1) {
            return semesterA[0].localeCompare(semesterB[0]);
          } else {
            return semesterB[0].localeCompare(semesterA[0]);
          }
        }
        return 1;
      })
    );

    onMounted(getGrades);
    watchEffect(getGrades);

    return {
      status,
      semesters,
      gradePerSemester,
      changeOrder,
      calcECTS,
      cleanString,
    };
  },
});
</script>
