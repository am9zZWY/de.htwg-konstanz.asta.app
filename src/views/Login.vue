<template>
  <div class="tile-group no-pointer">
    <tile>
      <div class="form">
        <div class="form-group">
          <label class="form-label">RZ-Benutzername</label>
          <input
            class="form-input"
            placeholder="Bsp. jo391mue"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Passwort</label>
          <input class="form-input" type="password" v-model="password" />
        </div>
        <div class="form-group">
          <button @click="save">Einloggen</button>
        </div>
      </div>
    </tile>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["changeCredentials"]),
    save: function () {
      this.changeCredentials({
        username: this.username,
        password: this.password,
      });
      this.username = "";
      this.password = "";
    },
  },
};
</script>
