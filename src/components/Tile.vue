<template>
  <component
    :is="tileRouteTo !== '' ? 'router-link' : 'div'"
    :class="[
      'tile',
      { disabled: isDeactivated },
      { 'inverted-tile': inverted },
      { 'warning-tile': warning },
      { button: isButton },
    ]"
    :to="tileRouteTo"
  >
    <div class="tile-wrapper">
      <div
        :class="[
          { 'big-tile-title': bigContent || tileIcon !== '' },
          { 'tile-title': !bigContent && tileIcon === '' },
        ]"
      >
        {{ tileTitle }}
      </div>
      <div
        :class="[
          'tile-content',
          { 'big-tile-content': bigContent || tileIcon !== '' },
        ]"
      >
        <slot>
          <em :class="[tileIcon, 'icon']" />
        </slot>
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
      default: "",
    },
    tileRouteTo: {
      type: String,
      required: false,
      default: "",
    },
    tileIcon: {
      type: String,
      required: false,
      default: "",
    },
    isButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    bigContent: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDeactivated: {
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
