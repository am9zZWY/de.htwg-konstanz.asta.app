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
    <tile tile-title="Dieses Projekt ist Open-Source" is-inverted>
      Unter folgendem Link kannst du dir unseren Code anschauen <br /><br />
      <a
        class="link big-link"
        href="https://www.github.com/htwg-app"
        rel="nofollow"
        target="_blank"
        >GitHub <em class="ri-github-fill"
      /></a>
    </tile>
  </div>
</template>

<script lang="ts">
import Tile from "@/components/tiles/TileComponent.vue";
import { defineComponent } from "vue";
import contributors from "@/assets/contributors.json";

export default defineComponent({
  name: "View_About",
  components: { Tile },
  setup() {
    return {
      contributors,
    };
  },
});
</script>
