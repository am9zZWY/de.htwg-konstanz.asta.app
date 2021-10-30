<template>
  <div class="tile-group">
    <tile is-inverted :status="status">
      <div id="termine" class="termine">
        <div v-html="html" />
      </div>
    </tile>
  </div>
</template>

<script>
import { get } from "@/helpers/fetchData";

export default {
  name: "Termine",
  data() {
    return {
      html: "",
      status: 0,
    };
  },
  methods: {
    /**
     * Modifies links so that they start from the official page of the HTWG
     */
    fixLinks: function () {
      const termine = document.getElementById("termine");
      let anchors = Array.from(termine.getElementsByTagName("a"));
      anchors.forEach((a) => {
        a.href = "https://www.htwg-konstanz.de" + a.pathname;
        a.target = "_blank";
      });
    },
  },
  mounted() {
    get("?termine")
      .then(({ content, status }) => {
        this.html = content;
        this.status = status;
      })
      .then(() => this.fixLinks());
  },
};
</script>
