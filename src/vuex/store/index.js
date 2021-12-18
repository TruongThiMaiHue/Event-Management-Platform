import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
  state: {
    authentication: {
      loginDialog: false,
      registerDialog: false
    },

    users: [
    ],
  },

  getters: {
    loginDialogStatus: state => state.authentication.loginDialog,
    registerDialogStatus: state => state.authentication.registerDialog,
    users: state => state.users
  },

  mutations: {
    updateLoginDialogVisible(state, loginDialog) {
      state.authentication.loginDialog = loginDialog;
    },

    updateRegisterDialogVisible(state, registerDialog) {
      state.authentication.registerDialog = registerDialog;
    },

    newUser(state, newUser) {
      state.users.push(newUser);
    },
  },

  actions: {
    updateLoginDialogVisible(context, loginDialog) {
      context.commit('updateLoginDialogVisible', loginDialog);
    },

    updateRegisterDialogVisible(context, registerDialog) {
      context.commit('updateRegisterDialogVisible', registerDialog);
    },

    newUser(context, newUser) {
      context.commit('newUser', newUser);
    },
  }
}
const store = new Vuex.Store(storeData)

export default store


