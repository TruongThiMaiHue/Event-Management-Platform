<template>
    <v-footer
        height="250px"
    >
        <div class="footer">
            <div class="footer-row">
                <div class="footer-row-title">Event management</div>
                <div class="footer-row-text">
                    <div>Homepage</div>
                    <div>Search page</div>
                </div>
            </div>

            <div class="footer-row">
                <div class="footer-row-title">Settings</div>
                <div class="footer-row-text">
                    <div @click="updateRegisterDialog()">Register</div>
                    <div @click="updateLoginDialog()">Login</div>
                </div>
            </div>

            <div class="footer-row">
                <div class="footer-row-title">About Coopax</div>
                <div class="footer-row-text">
                    <div>About Coopax</div>
                    <div>Terms & conditions</div>
                    <div>Privacy policy</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    </v-footer>
</template>

<script>
import { mapActions } from 'vuex'
import VUEX_ACTIONS from '@/vuex/vuex-actions.js';

export default {
     methods: {
        ...mapActions({
            $_updateLoginDialog: VUEX_ACTIONS.updateLoginDialogVisible,
            $_updateRegisterDialog: VUEX_ACTIONS.updateRegisterDialogVisible,
        }),

        updateLoginDialog() {
            const loginDialogVisible = true
            this.$_updateLoginDialog(loginDialogVisible);
        },

        updateRegisterDialog() {
            const registerDialogVisible = true
            this.$_updateRegisterDialog(registerDialogVisible);
        }
    }
}
</script>
<style scoped>
.v-footer {
    padding: 0 150px ;
    background-color: white !important;
}
.footer {
    display: flex;
    justify-content:space-between;
    width: 100%
}
.footer-row-title {
    font-weight: bold;
    color: #78909c;
    font-size: 18px;
    padding-bottom: 10px;
}
.footer-row-text {
    color: #78909c;
    font-size: 16px;
}
</style>