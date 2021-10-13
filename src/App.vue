<template>
  <nav class="nav">
    <router-link class="big-link important-text" to="Home"
      >HTWG App</router-link
    >
  </nav>
  <router-view />
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapMutations(["getCredentials"]),
  },
  created() {
    this.getCredentials();
  },
};
</script>

<style lang="scss" src="./styles/main.scss" />
