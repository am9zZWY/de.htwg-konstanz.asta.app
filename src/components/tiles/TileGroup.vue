<template>
  <div class="tile-group">
    <template v-if="!error">
      <slot></slot>
    </template>
    <template v-else>
      <tile :tile-subtitle="tileTitle" :status="status" />
    </template>
  </div>
</template>

<script lang="ts">
import Tile from "@/components/tiles/TileComponent.vue";
import { computed, defineComponent, toRefs } from "vue";
export default defineComponent({
  name: "TileGroup",
  components: { Tile },
  props: {
    status: {
      type: Number,
      required: false,
      default: 200,
    },
    tileTitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup(props: { status: number }) {
    const { status } = toRefs(props);
    const error = computed(() => status.value !== 200);
    return {
      error,
    };
  },
});
</script>
