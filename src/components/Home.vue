<template>
    <v-app>
        <the-header></the-header>

        <div :class="container">
            <the-sidebar 
                :visible="visible"
                @off="offSidebar"
            >
            </the-sidebar>

            <the-content
                @on="onSidebar"
            >
            </the-content>
        </div>
    <the-footer></the-footer>
</v-app>
   
</template>

<script>
import TheHeader from './home-components/TheHeader.vue';
import TheSidebar from './home-components/TheSidebar.vue';
import TheContent from './home-components/TheContent.vue';
import TheFooter from './home-components/TheFooter.vue';

export default {
    name: "Home",
    components: {
        TheHeader,
        TheSidebar,
        TheContent,
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
        offSidebar(e) {
          this.visible = e
        },
        onSidebar(e) {
          this.visible = e
        }
    }
  }
</script>

<style scoped>
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
.the-header {
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.2);
}
</style>

