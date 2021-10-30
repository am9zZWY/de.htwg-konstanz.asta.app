<template>
  <div>
    <h1 class="">{{ weekday }} {{ formattedDate }}</h1>
    <button class="button" @click="changeDay(-1)">Vorheriger Tag</button>
    <button class="button" @click="changeDay(1)">Nächster Tag</button>
  </div>
  <tile-group :status="status">
    <template v-if="typeof mensaFood !== 'undefined'">
      <template v-for="(food, foodIndex) in mensaFood.items" :key="foodIndex">
        <tile :tile-title="`${food.category} | ${food.price[0]}€`" class="food">
          {{ cleanString(food.title) }}
        </tile>
      </template>
    </template>
    <template v-else>
      <tile tile-title="Heute gibt es kein Essen"></tile>
    </template>
  </tile-group>
</template>

<script>
import {
  formatDate,
  dayAsNumber,
  weekday,
  createDate,
} from "@/helpers/dateHelper";
import { get } from "@/helpers/fetchData";
import TileGroup from "@/components/tiles/TileGroup";

export default {
  name: "Mensa",
  components: { TileGroup },
  data() {
    return {
      allFood: {},
      foodIndex: 0,
      date: new Date(),
      formattedDate: "",
      weekday: "",
      status: 0,
    };
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/[0-9(),]\w?/g, "");
    },
    changeDay: function (direction) {
      const days = Object.keys(this.allFood).length;
      this.foodIndex =
        direction === 1
          ? (this.foodIndex + 1) % days
          : (this.foodIndex - 1 + days) % days;
      this.date = new Date(this.timestamp * 1000);
      this.formattedDate = formatDate(this.date);
      this.weekday = weekday(this.date);
    },
  },
  computed: {
    mensaFood: function () {
      return this.allFood[this.timestamp];
    },
    timestamp: function () {
      return this.timestamps[this.foodIndex];
    },
    timestamps: function () {
      return Object.keys(this.allFood);
    },
  },
  created() {
    get("?mensa").then(({ content, status }) => {
      this.status = status;
      this.allFood = content;
    });
  },
  mounted() {
    this.date = createDate(true);
    this.foodIndex = dayAsNumber(this.date, true);
    this.formattedDate = formatDate(this.date);
    this.weekday = weekday(this.date);
  },
};
</script>
