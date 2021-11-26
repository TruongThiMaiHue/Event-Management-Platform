<template>
    <div class="home-container">
        <div>HOME</div>

        <v-btn @click="changeTempDataValue()">Change temp data value</v-btn>

        <div>{{ tempData }}</div>  

        <v-btn @click="sendMessage()">send to another component</v-btn>

        <v-btn 
            @click="goToEvent()">Go To Event
        </v-btn>

        <!-- <div>{{$store.state.todos}}</div> -->
        <v-btn @click="update()">ChangeName</v-btn>

         <v-btn 
            @click="updateUserDataInVuex()">updateUserDataInVuex
        </v-btn>

        <div>{{ userData }}</div>

    </div>
</template>
<script>
import VUEX_GETTERS from '@/vuex/vuex-getters.js';
import VUEX_ACTIONS from '@/vuex/vuex-actions.js';
// import { mapState } from 'vuex'
import { mapGetters, mapActions } from 'vuex'


  export default {
    name: 'home',

    data () { 
        return {
            localValue:"lala"
        }
    },

    props: {
        tempData: { type: String },
    },
    
    methods: {
        ...mapActions({
            $_updateUserData: VUEX_ACTIONS.updateUserData,
        }),

        updateUserDataInVuex() {
            const newUserData = {
                name: 'Huy',
            };

            this.$_updateUserData(newUserData);
        },

        changeTempDataValue() {
            const newTempData = "Hue";
            this.$emit('request-update-temp-data', newTempData);
        },

        sendMessage() {
            const mesg = "Welcome";
            this.$root.$emit('send-message', mesg);
        },

        goToEvent() {
        this.$router.push ({
            name:"event",
            params: {
                dataOverRoute: {
                    a: "lal",
                    b: "lol"
                }
            }
        })
        },
    },
    
    computed: {
        ...mapGetters({
            userData: VUEX_GETTERS.userData,
        }),
    },
}
</script>

<style>
.home-container {
    margin:auto;
    max-width: 1000px;
    line-height: 40px;
    padding: 0 10px ;
}
</style>


