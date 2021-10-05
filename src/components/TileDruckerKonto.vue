<template>
  <tile tile-title="Guthaben" big-content inverted>
    {{ druckerGuthaben }}
  </tile>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      druckerGuthaben: "-",
      username: "",
      password: "",
    };
  },
  async created() {
    fetch(
      `https://htwg-app-back.herokuapp.com/?drucker&username=${this.username}&password=${this.password}`
    )
      .then((result) => result.text())
      .then(
        (text) => (this.druckerGuthaben = text.replace(/,/, ".") + " Euro")
      );
  },
};
</script>
