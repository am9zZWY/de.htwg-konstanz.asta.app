<template>
  <div class="tile-group">
    <tile inverted>
      <div id="termine" class="termine">
        <div v-html="html" />
      </div>
    </tile>
  </div>
</template>

<script>
export default {
  name: "Termine",
  data() {
    return {
      html: "",
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
    fetch("https://htwg-app-back.herokuapp.com/?termine")
      .then((response) => response.text())
      .then((text) => (this.html = text))
      .then(() => this.fixLinks());
  },
};
</script>
