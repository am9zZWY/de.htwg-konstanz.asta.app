<template>
  <tile
    :status="status"
    big-content
    is-inverted
    tile-subtitle="Druckerkonto"
    tile-title="Guthaben"
  >
    <em class="ri-printer-line icon" />
    {{ druckerGuthaben }}
  </tile>
</template>

<script>
import { mapState } from "vuex";
import { post } from "@/helpers/fetchData";

export default {
  name: "Account",
  data() {
    return {
      druckerGuthaben: "",
      status: 0,
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

      post(body).then(({ content, status }) => {
        this.status = status;
        if (status === 200) {
          this.druckerGuthaben = content.replace(/,/, ".") + " Euro";
        }
      });
    },
  },
  mounted() {
    this.fetchDruckerGuthaben();
  },
  watch: {
    username() {
      this.fetchDruckerGuthaben();
    },
  },
};
</script>
