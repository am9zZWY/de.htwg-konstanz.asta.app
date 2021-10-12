<template>
  <component
    :is="tileRouteTo !== '' ? 'router-link' : 'div'"
    :class="[
      'tile',
      { disabled: deactivated },
      { 'inverted-tile': inverted },
      { 'warning-tile': warning },
    ]"
    :to="tileRouteTo"
  >
    <div class="tile-wrapper">
      <div
        :class="[
          { 'big-tile-title': bigContent },
          { 'tile-title': !bigContent },
        ]"
      >
        {{ tileTitle }}
      </div>
      <div :class="['tile-content', { 'big-tile-content': bigContent }]">
        <slot></slot>
      </div>
      <div class="tile-subtitle">
        {{ tileSubtitle }}
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: "Tile",
  props: {
    tileTitle: {
      type: String,
      required: false,
    },
    tileSubtitle: {
      type: String,
      required: false,
    },
    tileRouteTo: {
      type: String,
      required: false,
      default: "",
    },
    bigContent: {
      type: Boolean,
      required: false,
      default: false,
    },
    deactivated: {
      type: Boolean,
      required: false,
      default: false,
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false,
    },
    warning: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
