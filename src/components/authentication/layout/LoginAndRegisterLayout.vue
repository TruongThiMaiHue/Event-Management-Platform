<template>
  <div class="container">
    <div></div>

    <left-login></left-login>

    <slot></slot>

    <div class="closeDialog">
      <v-btn
        icon
        @click="updateLoginDialog(); updateRegisterDialog() "
        >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import LeftLogin from './imagePart.vue';
import { mapActions } from 'vuex'
import VUEX_ACTIONS from '@/vuex/vuex-actions.js';

export default {
  name: 'login-and-register-layout',

  components: {
    LeftLogin,
  },

  data () {
    return {
    }
  },

  // method: {
  //   closeDialog () {
  //     this.$refs.content.closeDialog();
  //   },
  // },
  methods: {
    ...mapActions({
      $_updateLoginDialog: VUEX_ACTIONS.updateLoginDialogVisible,
      $_updateRegisterDialog: VUEX_ACTIONS.updateRegisterDialogVisible,
    }),

    updateLoginDialog() {
      const newLoginDialogVisible = false
      this.$_updateLoginDialog(newLoginDialogVisible);
    },

    updateRegisterDialog() {
      const newRegisterDialogVisible = false
      this.$_updateRegisterDialog(newRegisterDialogVisible);
    },

  }
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 455px 1fr;
  width: 100% !important;
  padding: 0 !important;
  height: 100%;
  max-width: 100% !important;
}
.closeDialog {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 4
}
</style>
