<template>
  <div>
    <h1 class="">{{ weekday }}</h1>
    <button
      class="button"
      @click="changeDay(-1)"
      role="button"
      aria-label="Vorheriger tag"
      tabindex="0"
    >
      Vorheriger Tag
    </button>
    <button
      class="button"
      @click="changeDay(1)"
      role="button"
      aria-label="Nächster Tag"
      tabindex="0"
    >
      Nächster Tag
    </button>
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
import Tile from "@/components/tiles/Tile.vue";
import { get } from "@/helpers/fetchData";
import { computed, onMounted, Ref, ref } from "vue";
import { nullOrUndefined } from "@/helpers/checks";

export default {
  name: "Mensa",
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

    const food = computed(() => {
      if (nullOrUndefined(allFood.value) || nullOrUndefined(weekday.value)) {
        return [];
      }
      return allFood.value[weekday.value].items;
    });

    const changeDay = (direction: number) => {
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
      status,
      changeDay,
    };
  },
};
</script>
