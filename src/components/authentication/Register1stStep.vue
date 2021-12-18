<template>
    <div class="register--main-content">
        <div class="register--main-content__header">Create new user account</div>

        <div class="register--main-content__description">Please enter your information below to setup your account</div>
        
        <div class="register--main-content__input">
            <form ref="form">
                <div class="form-container">
                    <v-text-field
                        class="input--text-filed"
                        v-model="userGeneralInformation.fullname"
                        :rules="rules.fullname"
                        label="Full Name"
                        required
                        color="#546E7A"
                        outlined
                    ></v-text-field>
                    
                    <v-text-field
                        class="input--text-filed"
                        label="Preferred name"
                        placeholder="What are you called in daily life?"
                        v-model="userGeneralInformation.preferedname"
                        required
                        outlined
                        color="#546E7A"

                    ></v-text-field>

                    <v-text-field
                        class="input--text-filed"
                        v-model="userGeneralInformation.phone"
                        :rules="rules.phone"
                        label="Phone number"
                        outlined
                        color="#546E7A"
                    ></v-text-field>

                    <v-text-field
                        class="input--text-filed"
                        v-model="userGeneralInformation.email"
                        :rules="rules.email"
                        label="Email address"
                        required
                        outlined
                        color="#546E7A"
                    ></v-text-field>

                    <v-text-field 
                        class="input--text-filed"
                        v-model="userGeneralInformation.username"
                        label="Username"
                        :rules="rules.username"
                        outlined
                        color="#546E7A"
                    >
                    </v-text-field>

                    <v-text-field
                        class="input--text-filed"
                        v-model="userGeneralInformation.password"
                        placeholder="A password required at least 10 characters"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        label="Password"
                        :rules="rules.password"
                        :type="show ? 'text' : 'password'"
                        @click:append="show = !show"
                        outlined
                        color="#546E7A"
                    >
                    </v-text-field>
                </div>
                
                <div class="password-detail">
                    <div 
                        class="password-detail--description"
                        v-if="userGeneralInformation.password !== ''"
                    >
                        <span>Password strength: </span>

                        <span
                            :style="{color: score.color}"
                        >
                            {{ score.description }}
                        </span>
                    </div>

                    <v-progress-linear class="password-detail--strength"
                        v-if="userGeneralInformation.password !== ''"
                        :color="score.color"
                        :value="score.value"
                    ></v-progress-linear>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
const zxcvbn = require('zxcvbn');

export default {
    name:"register1st",
    
    data: () => ({
        rules: {
            fullname: [
                value => !!value || 'Required',
            ],

            phone: [
                value => !isNaN(value) || !value || 'Only number allowed',
            ],

            email: [
                value => !!value || 'Required',
                value => !value || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid e-mail address'
            ],

            username: [
                value => !!value || 'Required',
            ],

            password: [   
                value => !!value || 'Required',
                value => value.length >= 5,
                value => zxcvbn(value).score >= 1,
            ]
        },

        show: false,
        userGeneralInformation: {
            username:'',
            preferedname:'',
            password: '',
            fullname: '',
            email: '',
            phone:'',
        },
    }),

    computed: {    
        score () {
            const passRules = zxcvbn(this.userGeneralInformation.password);
            switch (passRules.score) {
                case 3:
                    return {
                        color: "#00CC83",
                        value: 100,
                        description: "strong"

                    };
                case 2:
                    return {
                        color: "light-blue",
                        value: 75,
                        description: "good"
                    };
                case 1:
                    return {
                        color: "orange",
                        value: 50,
                        description: "fair"
                    };
                default:
                    return {
                        color: "red",
                        value: 25,
                        description: "weak"
                    };
            }
        },
        formIsValid() {
            return this.userGeneralInformation 
            && !!this.userGeneralInformation.email
            && !!this.userGeneralInformation.fullname
            && !!this.userGeneralInformation.username
            && zxcvbn(this.userGeneralInformation.password).score >= 1
        },
    },

    watch: {
        formIsValid() { 
            const fill = Boolean(this.formIsValid)
            this.$emit('active-role-option-step', fill)
        },

        userGeneralInformation: {
            handler() {
                this.$emit('user-information-general', this.userGeneralInformation)
            },

            deep: true,
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;600;700&family=Roboto:wght@100&display=swap');
.password-detail--description {
    font-size: 14px;
    color: #78909c;
    font-weight: lighter;
}
.password-detail {
    padding-bottom: 30px;
}
.password-detail--strength {
    width: 205px !important;
    height: 8px !important;
}

.form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 26px;
    padding-bottom: 12px;
}

.input--text-filed {
    height: 60px;
}

.password-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.register--main-content__header {
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #37474F;
}
.register--main-content__description{
    font-family: 'Roboto', sans-serif;            
    font-size: 16px;
    line-height: 19px;
    color: #546E7A;
    padding-top: 10px;
}

.register--main-content__input {
    margin-top: 25px;
}

a {
    color: #1E88E5;
    text-decoration: none;
}
</style>