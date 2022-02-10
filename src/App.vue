<template>
  <nav class="nav">
    <router-link
      class="big-link important-text"
      to="Home"
      aria-roledescription="Zur Startseite zu gelangen"
      aria-label="Startseite"
      >HTWG App</router-link
    >
  </nav>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.fullPath" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { useStore } from "vuex";

export default {
  name: "App",
  setup() {
    const store = useStore();
    store.commit("getCredentials");
  },
};
</script>

<style lang="scss" src="./styles/main.scss" />
