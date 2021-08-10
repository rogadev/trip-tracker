import { createStore } from 'vuex';

export default createStore({
  state: {
    authenticated: false,
    token: null,
  },
  mutations: {
    setToken(state, payload) {
      state.authenticated = payload;
    },
    checkToken(state) {
      // Check with the server that our state.token is valid.
      state.authenticated = true;
    },
  },
  actions: {},
  modules: {},
});
