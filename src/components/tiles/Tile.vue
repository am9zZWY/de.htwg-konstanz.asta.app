<template>
  <component
    :is="tileRouteTo !== '' ? 'router-link' : 'div'"
    :class="[
      'tile',
      { disabled: isDeactivated && !error },
      { 'inverted-tile': isInverted && !error },
      { 'warning-tile': error || isWarning },
      { button: isButton },
      { 'tile-wide': isWide },
    ]"
    :to="tileRouteTo"
  >
    <div class="tile-wrapper">
      <template v-if="!error && !isWarning">
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
      </template>
      <template v-else>
        <div class="tile-title">
          {{ errorMessage }}
        </div>
        <div class="tile-subtitle">
          {{ tileSubtitle }}
        </div>
      </template>
    </div>
  </component>
</template>

<script>
import { statusToString } from "@/helpers/fetchData";

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
    isInverted: {
      type: Boolean,
      required: false,
      default: false,
    },
    isWide: {
      type: Boolean,
      required: false,
      default: false,
    },
    isWarning: {
      type: Boolean,
      required: false,
      default: false,
    },
    status: {
      type: Number,
      required: false,
      default: 200,
    },
  },
  computed: {
    error: function () {
      return this.status !== 200;
    },
    errorMessage: function () {
      return statusToString(this.status);
    },
  },
};
</script>
