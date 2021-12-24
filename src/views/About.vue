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
    <tile tile-title="Dieses Projekt ist Open-Source" is-inverted>
      Unter folgendem Link kannst du dir unseren Code anschauen <br /><br />
      <a
        class="link big-link"
        href="https://www.github.com/htwg-app"
        rel="nofollow"
        target="_blank"
        >GitHub <i class="ri-github-fill"
      /></a>
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
