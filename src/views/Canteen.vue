<template>
  <h2>{{ weekday }} {{ date }}</h2>
  <div class="tile-group">
    <template v-if="typeof mensaFood !== 'undefined'">
      <template v-for="(food, foodIndex) in mensaFood.items" :key="foodIndex">
        <tile
          :tile-subtitle="priceToString(food.price)"
          :tile-title="food.category"
          class="food"
        >
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
import { date, roundDate, toSeconds, weekday } from "@/helpers/date";

export default {
  name: "Mensa",
  data() {
    return {
      allFood: {},
      timestamp: 0,
    };
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/[0-9(),]\w?/g, "");
    },
    /**
     * If actual day is not found in map then update the timestamp
     * and display the food for the next available day.
     * @param tries
     */
    updateTimestamp: function (tries = 0) {
      let roundedDate = toSeconds(roundDate(this.timestamp)).toString();
      if (!(roundedDate in this.allFood) && tries < 10) {
        let dateOfTimeStamp = new Date(this.timestamp);
        dateOfTimeStamp.setDate(dateOfTimeStamp.getDate() + 1);
        this.timestamp = dateOfTimeStamp.getTime();
        this.updateTimestamp(tries + 1);
        return;
      }
      this.timestamp = roundDate(this.timestamp);
    },
    priceToString: function (price) {
      return `${price[0]}€ Studierende | ${price[1]}€ Schüler | ${price[2]}€ Mitarbeiter | ${price[3]}€ Gäste`;
    },
  },
  computed: {
    mensaFood: function () {
      return this.allFood[toSeconds(this.timestamp)];
    },
    date: function () {
      return date(new Date(this.timestamp));
    },
    weekday: function () {
      return weekday(new Date(this.timestamp));
    },
  },
  created() {
    fetch("https://htwg-app-back.herokuapp.com/?mensa_new")
      .then((response) => response.json())
      .then((json) => (this.allFood = json))
      .then(() => this.updateTimestamp());
  },
  mounted() {
    this.timestamp = new Date().getTime();
  },
};
</script>
