<template>
  <div>
    <h1 class="">{{ weekday }}</h1>
    <button class="button" @click="changeDay(-1)">Vorheriger Tag</button>
    <button class="button" @click="changeDay(1)">Nächster Tag</button>
  </div>
  <tile-group>
    <tile
      v-for="(item, foodIndex) in food"
      :key="foodIndex"
      :tile-title="`${item.category} | ${item.price[0]}€`"
      class="food"
    >
      {{ item.title }}
    </tile>
  </tile-group>
</template>

<script lang="ts">
import TileGroup from "@/components/tiles/TileGroup.vue";
import { get } from "@/helpers/fetchData";
import { computed, onMounted, ref } from "vue";
import { nullOrUndefined } from "@/helpers/checks";

export default {
  name: "Mensa",
  components: { TileGroup },
  setup() {
    const allFood: any = ref({});
    const index = ref(0);

    const getMensaFood = async () => {
      const { content } = await get("?mensa");
      allFood.value = content;
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
      changeDay,
    };
  },
};
</script>
