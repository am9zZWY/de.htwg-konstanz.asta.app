<template>
  <div class="tile-group">
    <tile tile-title="Hallo">
      Folgende Personen haben an diesem Projekt mitgewirkt:
      <ul>
        <li
          v-for="(contributor, contributor_index) in contributors"
          :key="contributor_index"
        >
          {{ contributor.name }}
          <br />
        </li>
      </ul>
    </tile>
    <tile is-inverted>
      Wenn dir diese App gefällt, dann schreibe uns gerne eine E-Mail an:<br />
      <strong class="email">jo391mue at htwg-konstanz.de</strong>.
    </tile>
  </div>
</template>

<script>
const contributors = require("@/assets/contributors.json");

export default {
  name: "About",
  data() {
    return {
      contributors,
    };
  },
};
</script>
