<template>
  <tile big-content inverted tile-subtitle="Druckerkonto" tile-title="Guthaben">
    {{ druckerGuthaben }}
  </tile>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Account",
  data() {
    return {
      druckerGuthaben: "-",
    };
  },
  computed: {
    ...mapState(["username", "password"]),
  },
  methods: {
    fetchDruckerGuthaben: async function () {
      const body = {
        username: this.username || "",
        password: this.password || "",
        reqtype: "drucker",
      };

      fetch(`https://htwg-app-back.herokuapp.com/`, {
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((result) => result.text())
        .then(
          (text) => (this.druckerGuthaben = text.replace(/,/, ".") + " Euro")
        );
    },
  },
  mounted() {
    this.fetchDruckerGuthaben();
  },
};
</script>
