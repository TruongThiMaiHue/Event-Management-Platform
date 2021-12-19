<template>
    <v-system-bar class="header" app
        height="72"
    >
        <v-img
            id="logo"
            alt="Logo"
            class="shrink mr-2"
            contain
            src="../../assets/Group 11.png" 
            transition="scale-transition"
            width="100"
        />
    
        <v-spacer></v-spacer>

        <v-app-bar-title>{{fullName}}</v-app-bar-title>

        <img 
            id="avatar"
            src="../../assets/image 2.png"
        />
        <img 
            class="ml-2 mt-1"
            src="../../assets/arrow.png"
        />
    </v-system-bar>
</template>
<script>
export default {
    props: {
        fullName: { type: String }
    },
}
</script>
<style scoped>
#logo {
    margin-left:10px ;
    margin-top:5px ;
}
#avatar {
    display: absolute;
    border-radius: 25px;
    margin-left:20px;
    right: 0
}
.v-app-bar-.v-app-bar-title {
    font-size: 14px
}  
.v-app-bar-title {
    font-size: 16px;
    color: #1f4353;
    font-weight: 500;
}
</style>