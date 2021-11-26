<template>
  <v-app>
    <v-main>
      <router-view>
      </router-view>
    </v-main>

      <login :visible_login="loginDialogStatus"></login>

      <register :visible_register="registerDialogStatus"></register>
  </v-app>
</template>

<script>
import register from './components/authentication/RegisterLayout.vue'
import login from './components/authentication/Login.vue'
import VUEX_GETTERS from '@/vuex/vuex-getters.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    login,
    register
  },

  computed: {
    ...mapGetters({
      loginDialogStatus: VUEX_GETTERS.loginDialogStatus,
      registerDialogStatus: VUEX_GETTERS.registerDialogStatus,
    }),
  },
}
</script>