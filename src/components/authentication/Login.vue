<template>
    <v-dialog
        :value="visible_login"
        fullscreen
        hide-overlay
        persistent
    >
        <login-and-register-layout>
            <div class="login-container"> 
                <div class="login--main-content">
                    <div class="login--main-content__header">Log in</div>

                    <div class="login--main-content__description">Please enter your usename and password</div>
                    
                    <div class="login--main-content__input">
                        <v-form ref="form">
                            <v-text-field
                                class="input--text-filed"
                                ref="name"
                                v-model="name"
                                label="Username"
                                :rules="rules"
                                color="#546E7A"
                                outlined
                                required
                            >
                            </v-text-field>

                            <v-text-field
                                class="input--text-filed"
                                ref="pass"
                                v-model="pass"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                label="Password"
                                :rules="rules"
                                :type="show ? 'text' : 'password'"
                                @click:append="show = !show"
                                outlined
                                required
                                color="#546E7A"
                            >
                            </v-text-field>
                        </v-form>
                    </div>

                    <div class = "login--main-content__action">
                        <div class="action-forget-password">
                            <a href="#">Forget your usename? Forget your password?</a>
                        </div>
                        
                        <div class="action-submit">
                            <button type ="submit" @click="goToLogin()">Log In</button>
                        </div>
                    </div>
                </div>
             
                <div class="login--footer-content">
                    Don't have an account? 
                    <span @click="updateRegisterDialog(); updateLoginDialog()"><a>Register</a></span> 
                </div>
            </div>
        </login-and-register-layout>
    </v-dialog>
</template>

<script>
import LoginAndRegisterLayout from './layout/LoginAndRegisterLayout.vue'
import { mapActions, mapGetters } from 'vuex'
import VUEX_ACTIONS from '@/vuex/vuex-actions.js'
import VUEX_GETTERS from '@/vuex/vuex-getters.js';

export default {
    name: 'login',

    components: {
        LoginAndRegisterLayout,
    },

    data: () => ({
        show: false,
        rules: [
            value => !!value || 'Required.',
        ],
        name:'',
        pass:'',
    }),

    props: {
        visible_login: { type: Boolean }
    },

    watch: {
        visible_login(visible) {
            if (!visible) {
                this.$refs.form.reset()
            }
        },
    },

    computed: {
        ...mapGetters({
            users: VUEX_GETTERS.users,
        }),
        isUser() { 
            let isUser = {}
            this.users.forEach(user => {
                if (user.username === this.name && user.password === this.pass) {
                    isUser = user
                }
            })
            return isUser
        }
    },

    methods: {
        
        ...mapActions({
            $_updateRegisterDialog: VUEX_ACTIONS.updateRegisterDialogVisible,
            $_updateLoginDialog: VUEX_ACTIONS.updateLoginDialogVisible,

        }),

        updateRegisterDialog() {
            const registerDialogVisible = true
            this.$_updateRegisterDialog(registerDialogVisible);
        },

        updateLoginDialog() {
            const newLoginDialogVisible = false
            this.$_updateLoginDialog(newLoginDialogVisible);
        },

        goToLogin() {
            if (!this.$refs.form.validate()) {
                return;
            }

            const newLoginDialogVisible = false
            if (this.isUser !== {}) {
                this.$_updateLoginDialog(newLoginDialogVisible) 
                console.log(this.isUser.fullname)
                this.$router.push ({
                    name:"dashboard",
                    params: {
                        fullName: this.isUser.fullname
                    }
                })
            } else {
                alert('meo')
            
            }
        }
    },
   
}
</script>

<style scoped>

.v-label {
    color: #37474F;
}

.login-container {
    position: relative;
    padding: 30px 10px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login--main-content {
    width: 660px;
}

.login--main-content__header {
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #37474F;
}

.login--main-content__description {
    font-family: 'Roboto', sans-serif;            
    font-size: 16px;
    line-height: 19px;
    color: #546E7A;
    padding-top: 10px;
}

.login--main-content__input {
    margin-top: 30px;
}

.login--main-content__action {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-forget--password {
    font-family: 'Roboto', sans-serif;            
    font-size: 16px;
    line-height: 19px;
    color: #1E88E5;
}

.action-submit button {
    width: 76px;
    height: 36px;
    border: none;
    background: #FF6E40;
    border-radius: 4px;
    color: white;
    font-family: 'Roboto', sans-serif;    
    font-size: 16px;  
    letter-spacing: 2px; 
}

.login--footer-content {
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

a {
    color: #1E88E5;
    text-decoration: none;
}
</style>