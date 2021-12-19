<template>
    <v-app>
        <the-header :full-name="fullName"></the-header>
        
        <the-sidebar></the-sidebar>

        <v-main>
            <v-container
                class="py-8 px-6"
            >
                <router-view></router-view>
            </v-container>
        </v-main>

        <the-footer></the-footer>
    </v-app>
</template>

<script>
import TheHeader from './admin-components/TheHeader.vue'
import TheSidebar from './admin-components/TheSidebar.vue'
import TheFooter from './admin-components/TheFooter.vue'
export default {
    components: { 
        TheHeader, 
        TheSidebar,
        TheFooter 
    },
    props: {
        fullName: { type: String }
    },
}
</script>

<style scoped>
.v-main {
    background: #F5F6F8;
}
.header {
    background-color: white !important;
    box-shadow: 0 1px 2px rgb(0, 0, 0, 0.2);
    z-index: 30
} 
</style>

<style>
::-webkit-scrollbar {
    width: 0px
}
</style>