import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
  state: {
    authentication: {
      loginDialog: false,
      registerDialog: false
    },

    user: {
      fullName: '',
      email: '',
      userName: '',
      password: ''
    },
    step1st: true
  },

  getters: {
    userFullname: state => state.user.fullName,
    userEmail: state => state.user.email,
    userName: state => state.user.userName,
    userPass: state => state.user.password,

    step1st: state => state.step1st,



    loginDialogStatus: state => state.authentication.loginDialog,

    registerDialogStatus: state => state.authentication.registerDialog

  },

  mutations: {
  

    updateLoginDialogVisible(state, loginDialog) {
      state.authentication.loginDialog = loginDialog;
    },

    updateRegisterDialogVisible(state, registerDialog) {
      state.authentication.registerDialog = registerDialog;
    },

    updateUserFullname(state, fullname) {
      state.user.fullName = fullname;
    },
    updateUserPassword(state, pass) {
      state.user.password = pass;
    },

    updateStep1st(state, valid) {
      state.step1st = valid;
    },
  },

  actions: {
 
    updateLoginDialogVisible(context, loginDialog) {
      context.commit('updateLoginDialogVisible', loginDialog);
    },

    updateRegisterDialogVisible(context, registerDialog) {
      context.commit('updateRegisterDialogVisible', registerDialog);
    },

    updateUserPassword(context, pass) {
      context.commit('updateUserPassword', pass);
    },
    updateStep1st(context, valid) {
      context.commit('updateStep1st', valid);
    },
  }
}
const store = new Vuex.Store(storeData)

export default store


