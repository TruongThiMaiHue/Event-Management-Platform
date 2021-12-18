<template>
  <v-app-bar app
    background-color="white"
    height="72"
  >
    <v-img
      alt="Logo"
      class="shrink mr-2"
      contain
      src="../../assets/Group 11.png" 
      transition="scale-transition"
      width="100"
    />
  
    <v-spacer></v-spacer>

    <v-btn
      color="warning"
      dark
      @click="updateLoginDialog()"
    >
      Login
    </v-btn>

      <v-btn
      color="primary"
      dark
      @click="updateRegisterDialog()"
    >
      Register
    </v-btn>    
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
import VUEX_ACTIONS from '@/vuex/vuex-actions.js';

export default {
  name: 'TheHeader',
  data () {
    return {
      fullname: null
    }
  },

  methods: {
    ...mapActions({
        $_updateLoginDialog: VUEX_ACTIONS.updateLoginDialogVisible,
        $_updateRegisterDialog: VUEX_ACTIONS.updateRegisterDialogVisible,
    }),

    updateLoginDialog() {
        const loginDialogVisible = true
        this.$_updateLoginDialog(loginDialogVisible);
    },

    updateRegisterDialog() {
        const registerDialogVisible = true
        this.$_updateRegisterDialog(registerDialogVisible);
    }
  },

}
</script>

<style scoped>
  .dialog{
    height: 100%;
  }

  .right-icon-out {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 4
  }

  #avatar {
    display: absolute;
    border-radius: 25px;
    margin-left:20px;
    right: 0
  }

  .v-main {
    margin-left: 250px;
  }

  .v-app-bar-title {
    font-size: 14px
  }
</style>