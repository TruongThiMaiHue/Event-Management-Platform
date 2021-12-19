<template>
<v-app>
 <the-header></the-header>
 <div :class="container">
   <the-sidebar 
    :visible="visible"
    @name="updateSidebar"
    ></the-sidebar>
    <the-footer></the-footer>
 </div>
  <div>{{visible}}</div>

</v-app>
   
</template>

<script>
  import TheHeader from './home-components/TheHeader.vue';
    import TheSidebar from './home-components/TheSidebar.vue';
  import TheFooter from './home-components/TheFooter.vue';

  export default {
    name: "Home",
    components: {
      TheHeader,
      TheSidebar,
      TheFooter
    },
    data: () => ({
      visible: true
    }),
      computed: {
        container() {
            return [
                'container',
                this.visible === false ? 'oiSidebar' : '',
            ];
        },
      },
      methods: {
        updateSidebar(e) {
          this.visible = e
        }
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
  grid-template-columns: 300px 1fr;
  width: 100% !important;
  padding: 0px !important;
  height: 100%;
  max-width: 100% !important;
}
.oiSidebar{
    grid-template-columns: 0 1fr;
}

</style>

