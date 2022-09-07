import { createStore } from "vuex";
import encrypt_data from "@/helpers/encryptionHelper";
import { cookieCreator, cookieReader } from "@/helpers/cookieHelper";
import { nullOrUndefined } from "@/helpers/checks";

export const store = createStore({
  state: {
    username: "",
    password: "",
  },
  getters: {
    isLoggedIn(state) {
      return state.username !== "" && !nullOrUndefined(state.username);
    },
  },
  mutations: {
    storeCredentials(
      state,
      credentials: { username: string; password: string }
    ) {
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
  actions: {
    storeCredentials(
      context,
      credentials: { username: string; password: string }
    ) {
      context.commit("storeCredentials", credentials);
    },
  },
  modules: {},
});
