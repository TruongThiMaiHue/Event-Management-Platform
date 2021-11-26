<template>
  <v-app>
    <the-sidebar></the-sidebar>

    <the-header></the-header>

    <v-main>
      <router-view 
        :temp-data="tempData"
        @request-update-temp-data="updateTempData($event)">
      </router-view>
    <the-footer></the-footer>
    </v-main>
      </v-app>
</template>

<script>
  import theHeader from './child-components/TheHeader.vue';
  import theSidebar from './child-components/TheSidebar.vue';
  import theFooter from './child-components/TheFooter.vue';


  export default {
    name: "Admin",
    components: {
      theSidebar,
      theHeader,
      theFooter
    },

    data () {
      return {
        tempData: 'LaLaLa!',
      }
    },
    
    methods: {
      updateTempData(newTempData) {
        this.tempData = newTempData;
      },
    },
  }
</script>

<style scoped>
.v-main {
  margin-left: 250px;
  background: #F5F6F8;

}

</style>

