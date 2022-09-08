<template>
  <div>
    <h1>{{ weekdayAsWord }} {{ weekday }}</h1>
    <template v-if="food.length > 0">
      <button
        class="button"
        @keydown.right="changeDay(1)"
        @keydown.left="changeDay(-1)"
        @click="changeDay(-1)"
        role="button"
        aria-label="Vorheriger tag"
        tabindex="0"
      >
        Vorheriger Tag
      </button>
      <button
        class="button"
        @keydown.right="changeDay(1)"
        @keydown.left="changeDay(-1)"
        @click="changeDay(1)"
        role="button"
        aria-label="Nächster Tag"
        tabindex="0"
      >
        Nächster Tag
      </button>
    </template>
  </div>
  <tile-group :status="status">
    <tile
      v-for="(item, foodIndex) in food"
      :key="foodIndex"
      :tile-title="`${item.category} | ${item.price[0]}€`"
      class="food"
      tabindex="-1"
    >
      {{ item.title }}
    </tile>
  </tile-group>
</template>

<script lang="ts">
import TileGroup from "@/components/tiles/TileGroup.vue";
import Tile from "@/components/tiles/TileComponent.vue";
import { get } from "@/helpers/fetchData";
import { computed, defineComponent, onMounted, Ref, ref, watch } from "vue";
import { nullOrUndefined } from "@/helpers/checks";
import { dateFromString, dayAsWord, formatDate, isWeekend } from "@/helpers/dateHelper";

export default defineComponent({
  name: "View_Canteen",
  components: { TileGroup, Tile },
  setup() {
    const allFood: any = ref({});
    const status: Ref<number> = ref(0);
    const index = ref(0);

    const getMensaFood = async () => {
      const result = await get("?mensa");
      status.value = result.status;
      allFood.value = result.content;
    };

    const weekdays = computed(() => Object.keys(allFood.value));
    const weekday = computed(() => weekdays.value[index.value]);
    const weekdayAsWord = computed(() =>
      dayAsWord(dateFromString(weekday.value))
    );
    const currentDay = computed(() => new Date());
    const updateIndex = (wds: string[]) => {
      wds.forEach((wd, idx) => {
        if (wd === formatDate(currentDay.value) || (isWeekend(currentDay.value) && idx === 5 /* skip weekends */)) {

          index.value = idx;
        }
      });
    };
    watch(weekdays, (newVal) => updateIndex(newVal));

    const food = computed(() => {
      /* Return all food of a specific day */
      if (nullOrUndefined(allFood.value) || nullOrUndefined(weekday.value)) {
        return [];
      }
      return allFood.value[weekday.value].items;
    });

    const changeDay = (direction: number) => {
      /* Return if there is no food */
      if (food.value.length === 0) {
        return;
      }

      /* Change day by +1 or -1 */
      const days = weekdays.value.length;
      index.value =
        direction === 1
          ? (index.value + 1) % days
          : (index.value - 1 + days) % days;
    };

    onMounted(getMensaFood);

    return {
      food,
      weekday,
      weekdays,
      weekdayAsWord,
      status,
      changeDay
    };
  }
});
</script>
