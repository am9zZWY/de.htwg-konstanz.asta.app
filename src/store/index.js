import { createStore } from "vuex";
import encrypt_data from "@/helpers/encryption";
import { cookieCreator, cookieReader } from "@/helpers/cookieHelper";

export default createStore({
  state: {
    username: "",
    password: "",
  },
  mutations: {
    storeCredentials(state, credentials = {}) {
      const { username, password } = credentials;
      state.username = encrypt_data(username);
      state.password = encrypt_data(password);
      document.cookie = cookieCreator({
        key: "username",
        value: state.username,
        expiration: 30,
      });
      document.cookie = cookieCreator({
        key: "password",
        value: state.password,
        expiration: 30,
      });
    },
    getCredentials(state) {
      const username = cookieReader("username");
      const password = cookieReader("password");
      if (username !== null && password !== null) {
        state.username = username;
        state.password = password;
      }
    },
  },
  actions: {},
  modules: {},
});
