<template>
  <component
    :is="tileRouteTo !== '' ? 'router-link' : 'div'"
    :class="[
      'tile',
      { disabled: isDeactivated && !error },
      { 'inverted-tile': isInverted && !error },
      { 'warning-tile': error || isWarning },
    ]"
    :to="tileRouteTo"
    :aria-label="`Kachel ${tileTitle}`"
    :tabindex="tileRouteTo !== '' ? '0' : '-1'"
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
          {{ tileSubtitle || tileTitle }}
        </div>
      </template>
    </div>
  </component>
</template>

<script lang="ts">
import { statusToString } from "@/helpers/fetchData";
import { computed, defineComponent, toRefs } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TileComponent",
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
    requireLogin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props: { status: number; requireLogin: boolean }) {
    const { status, requireLogin } = toRefs(props);
    const store = useStore();
    const isLoggedIn = computed(() => store.getters.isLoggedIn);
    const error = computed(
      () => status.value !== 200 || (requireLogin.value && !isLoggedIn.value)
    );
    const errorMessage = computed(() => {
      if (requireLogin.value && !isLoggedIn.value) {
        return statusToString(1);
      } else {
        return statusToString(status.value);
      }
    });
    return {
      error,
      errorMessage,
    };
  },
});
</script>
