import { createStore } from "vuex";

export default createStore({
  state: {
    username: "",
    password: "",
  },
  mutations: {
    changeCredentials(state, credentials = {}) {
      const { username, password } = credentials;
      state.username = username;
      state.password = password;
    },
  },
  actions: {},
  modules: {},
});
