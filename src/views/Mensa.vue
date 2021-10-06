<template>
  <div class="tile-group">
    <template v-for="(food, foodIndex) in mensaFood" :key="foodIndex">
      <tile
        :tile-title="food.category"
        :tile-subtitle="food.price"
        class="food"
      >
        {{ cleanString(food.title) }}
      </tile>
    </template>
  </div>
</template>

<script>
export default {
  name: "Mensa",
  data() {
    return {
      mensaFood: [],
    };
  },
  methods: {
    cleanString: function (string) {
      return string.replace(/[0-9(),]\w?/g, "");
    },
  },
  created() {
    fetch("https://htwg-app-back.herokuapp.com/?mensa")
      .then((response) => response.json())
      .then((json) => (this.mensaFood = json));
  },
};
</script>
