<template>
  <div class="tile-group no-pointer">
    <tile>
      <div class="form">
        <div class="form-group">
          <label class="form-label" for="username">RZ-Benutzername</label>
          <input
            id="username"
            class="form-input"
            placeholder="Bsp. jo391mue"
            v-model="username"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Passwort</label>
          <input
            id="password"
            class="form-input"
            type="password"
            v-model="password"
            @keydown.enter="saveCredentials"
          />
        </div>
        <div class="form-group">
          <button @click="saveCredentials">Einloggen</button>
        </div>
      </div>
    </tile>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Tile from "@/components/tiles/TileComponent.vue";

export default defineComponent({
  name: "View_Login",
  components: { Tile },
  setup() {
    const username = ref("");
    const password = ref("");

    const router = useRouter();

    const store = useStore();
    const saveCredentials = () => {
      store.commit("storeCredentials", {
        username: username.value,
        password: password.value,
      });
      username.value = "";
      password.value = "";

      router.push({ name: "Home" });
    };

    return {
      username,
      password,
      saveCredentials,
    };
  },
});
</script>
