<template>
  <v-app-bar app
    height="72"
    class="header-bar"
  >
    <v-img
      alt="Logo"
      id="logo"
      class="shrink mr-2"
      contain
      src="../../assets/Group 11.png" 
      transition="scale-transition"
      width="100"
    />
  
    <v-spacer></v-spacer>

    <div class="action-login">
      <button type ="submit" @click="updateLoginDialog()">Log In</button>
    </div>
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
  },

}
</script>

<style scoped>
  .header-bar {
    background-color: white !important;
  }
  .dialog{
    height: 100%;
  }
  #avatar {
    display: absolute;
    border-radius: 25px;
    margin-left:20px;
    right: 0
  }
  .v-app-bar-title {
    font-size: 14px
  }
  #logo {
    margin-left:10px ;
    margin-top:5px ;
  }
  .action-login button {
    width: 76px;
    height: 36px;
    border: none;
    background: #FF6E40;
    border-radius: 4px;
    color: white;
    font-family: 'Roboto', sans-serif;    
    font-size: 16px;  
    letter-spacing: 2px; 
}
</style>