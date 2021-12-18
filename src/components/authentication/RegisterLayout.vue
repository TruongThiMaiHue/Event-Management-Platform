<template>
    <v-dialog
        :value="visible_register"
        fullscreen
        hide-overlay
        persistent
    >
        <login-and-register-layout>
            <div class="content">
                <div class='register-content'>
                    <register1st-step 
                        @active-role-option-step="activeRoleOptionStep($event)"
                        v-show="isStayInMainInformationStep"
                        @user-information-general="userGeneralInformation($event)"
                    ></register1st-step >

                    <register2nd-step  
                        @active-additon-step="activeAdditionStep($event)"
                        @user-information-role="userRoleInformation($event)"
                        v-show="isStayInRoleOptionStep"
                    >
                    </register2nd-step >
                    
                    <register3rd-step
                        @user-information-event="userEventInformation($event)"
                        v-show="isStayInAdditionStep"
                    >          
                    </register3rd-step >

                    <register-submit  
                        v-show="isFinishAllSteps"
                    >
                    </register-submit>
                    
                    <div class = "register--main-content__action">
                         <v-btn class="action-btn--empty"
                            v-show="isStayInMainInformationStep"
                        >
                        </v-btn>

                        <v-btn class="action-btn--back"
                            color="white"
                            depressed
                            v-show="isStayInMiddelSteps"
                            @click.prevent="prevStep()"
                        >
                            Back
                        </v-btn>
                    
                        <v-btn class="action-btn--next"
                            depressed
                            color="primary"
                            :disabled = goToRoleOptionStep
                            v-show="isStayInMainInformationStep"
                            @click="nextStep()"
                        >
                            Next
                        </v-btn>

                         <v-btn class="action-btn--next"
                            depressed
                            color="primary"
                            :disabled = goToAdditionStep
                            v-show="isStayInRoleOptionStep"
                            @click.prevent="nextStep()"
                        >
                            Continue
                        </v-btn>

                        <v-btn class="action-btn--next"
                            depressed
                            color="primary"
                            v-show="isStayInAdditionStep"
                            @click.prevent="submitRegister()"
                        >
                            Submit
                        </v-btn>
                    </div>
                </div>
    
                <div class="register--footer-content">
                    <span>Already have an account? </span>
                    <span @click="updateLoginDialog(); updateRegisterDialog()"><a>Log in</a></span> 
                </div>
            </div>
        </login-and-register-layout>
    </v-dialog>
</template>

<script>
import LoginAndRegisterLayout from './layout/LoginAndRegisterLayout.vue'
import Register3rdStep from './Register3rdStep.vue'
import Register2ndStep from './Register2ndStep.vue'
import Register1stStep from './Register1stStep.vue'
import RegisterSubmit from './RegisterSubmit.vue'
import { mapActions } from 'vuex'
import VUEX_ACTIONS from '@/vuex/vuex-actions.js';

export default {
    name: 'RegisterLayout',

    components: {
        LoginAndRegisterLayout,
        Register1stStep,
        Register2ndStep,
        Register3rdStep,
        RegisterSubmit
    },

    data() {
        return {
            step: 1,
            totalSteps: 4,
            goToRoleOptionStep: true,
            goToAdditionStep: true,
            userInformation: {}
        }
    },

    props: {
        visible_register: { type: Boolean }
    },

     watch: {
        visible_login(visible) {
            if (!visible) {
                this.$refs.form.reset()
            return this.step === 1;
            }
        },
    },

    computed: {
        isStayInMainInformationStep() {
            return this.step === 1;
        },
        isStayInRoleOptionStep() {
            return this.step === 2;
        },
        isStayInAdditionStep() {
            return this.step === 3;
        },
        isFinishAllSteps() {
            return this.step === 4;
        },
        isStayInMiddelSteps() {
            return this.step !== 1 && this.step !== 4
        }
    },

    methods:{
        prevStep() {
            this.step --;
        },

        nextStep() {
            this.step ++;
        },

        submitRegister() {
            this.step = 4;
            this.$_newUser(this.userInformation);                               
        },

        ...mapActions({
            $_updateLoginDialog: VUEX_ACTIONS.updateLoginDialogVisible,
            $_updateRegisterDialog: VUEX_ACTIONS.updateRegisterDialogVisible,
            $_newUser: VUEX_ACTIONS.newUser,
        }),

        updateLoginDialog() {
            const loginDialogVisible = true
            this.$_updateLoginDialog(loginDialogVisible);
        },

        updateRegisterDialog() {
            const newRegisterDialogVisible = false
            this.$_updateRegisterDialog(newRegisterDialogVisible);
        },

        activeRoleOptionStep(a) {
            this.goToRoleOptionStep = !a;
        },

        activeAdditionStep(d) {
            this.goToAdditionStep = !d;
        },

        userGeneralInformation(a) {
            this.userInformation = a
        },
        userRoleInformation(a) {
            this.userInformation.role = a
        },
        userEventInformation(a) {
            this.userInformation.event = a
        }
    },
}
</script>

<style scoped>
.action-btn--empty {
    visibility: hidden;
}

.content {
    position: relative;
    padding: 70px 10px;
    background: white;
     display: flex;
    justify-content: space-between;
    align-items: center;
}
.register-content {
    width: 660px;
    margin: auto;
}
.register--main-content__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    padding-bottom: 15px
}
.action-btn--back {
    border: 1px solid#e9e6e6 !important;
    color: #546E7A;
    background: white !important;
    text-transform: none;
    font-weight: normal !important;
    font-size: 16px;  
}

.action-btn--next {
    text-transform: none;
    font-size: 16px;  
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
    background-color: #94c8f5!important;
    color: white !important;
    font-size: 16px;  
    text-transform: none;
    font-weight: normal !important;
}

.register--footer-content {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 20px;
    font-family: 'Roboto', sans-serif;    
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #546E7A;
}

</style>