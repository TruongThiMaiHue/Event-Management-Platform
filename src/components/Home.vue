<template>
<v-app>
 <the-header></the-header>
 <div :class="container">
    <div></div>
    <!-- <the-sidebar ></the-sidebar> -->

    <the-footer></the-footer>
 </div>
  
</v-app>
   
</template>

<script>
  import TheHeader from './home-components/TheHeader.vue';
    // import TheSidebar from './home-components/TheSidebar.vue';
  import TheFooter from './home-components/TheFooter.vue';

  export default {
    name: "Home",
    components: {
      TheHeader,
      // TheSidebar,
      TheFooter
    },
    data: () => ({
      visible: false
    }),
      computed: {
        container() {
            return [
                'container',
                this.visible === true ? 'oiSidebar' : '',
            ];
        },
      }
  }
</script>

<style scoped>
.v-main {
  margin-left: 250px;
  background: #F5F6F8;

}
.container {
  display: grid;
  grid-template-columns: 455px 1fr;
  width: 100% !important;
  padding: 0 !important;
  height: 100%;
  max-width: 100% !important;
}
.oiSidebar{
    grid-template-columns: 0 1fr;
}

</style>

