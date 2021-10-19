<template>
  <div>
    <h1 class="">{{ weekday }} {{ formattedDate }}</h1>
    <button class="button" @click="changeDay(-1)">Vorheriger Tag</button>
    <button class="button" @click="changeDay(1)">Nächster Tag</button>
  </div>
  <div class="tile-group">
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
  </div>
</template>

<script>
import { formatDate, dayAsNumber, weekday, createDate } from "@/helpers/date";

export default {
  name: "Mensa",
  data() {
    return {
      allFood: {},
      foodIndex: 0,
      date: new Date(),
      formattedDate: "",
      weekday: "",
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
    fetch("https://htwg-app-back.herokuapp.com/?mensa")
      .then((response) => response.json())
      .then((json) => (this.allFood = json));
  },
  mounted() {
    this.date = createDate(true);
    this.foodIndex = dayAsNumber(this.date, true);
    this.formattedDate = formatDate(this.date);
    this.weekday = weekday(this.date);
  },
};
</script>
