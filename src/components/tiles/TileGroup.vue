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

<script>
export default {
  name: "TileGroup",
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
  computed: {
    error: function () {
      return this.status !== 200;
    },
  },
};
</script>
