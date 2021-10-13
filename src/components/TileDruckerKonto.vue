<template>
  <tile big-content inverted tile-subtitle="Druckerkonto" tile-title="Guthaben">
    <template v-if="druckerGuthaben !== '-'">
      <em class="ri-printer-line icon" />
    </template>
    {{ druckerGuthaben }}
  </tile>
</template>

<script>
import { mapState } from "vuex";
import fetchData from "@/helpers/fetchData";

export default {
  name: "Account",
  data() {
    return {
      druckerGuthaben: "-",
    };
  },
  computed: {
    ...mapState(["username", "password"]),
  },
  methods: {
    fetchDruckerGuthaben: async function () {
      const body = JSON.stringify({
        username: this.username || "",
        password: this.password || "",
        reqtype: "drucker",
      });

      fetchData(
        (result) => {
          result.text().then((text) => {
            if (text !== "") {
              this.druckerGuthaben = text.replace(/,/, ".") + " Euro";
            }
          });
        },
        {
          body: body,
        }
      );
    },
  },
  mounted() {
    this.fetchDruckerGuthaben();
  },
};
</script>
