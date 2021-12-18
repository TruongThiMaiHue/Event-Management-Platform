<template>
    <div class="register--main-content">
        <div class="register--main-content__header">Select your role</div>

        <div class="register--main-content__description">Choose the role of your company or select personal. 
            Depending on your role we can better assist you in your use of Coopax.</div>
    
        <v-radio-group
            class="register--option-group"
            v-model="roles"
            row
        >
            <div :class="personalRoleRowClasses">
                <v-radio 
                    value='personal'
                ></v-radio>

                <v-icon 
                    class="register--role-option__icon"
                >
                    mdi-account
                </v-icon>

                <div class="register--role-option_text">
                    <span class="role-title">
                        Personal:
                    </span>

                    <span class="role-description">
                        Choose a personal account if you want to book an event 
                        as a private individual, for example a wedding.
                    </span>
                </div>
            </div>

            <v-divider></v-divider>

            <div :class="businessRoleRowClasses">
                <v-radio 
                    value='business'
                ></v-radio>

                <v-icon 
                    class="register--role-option__icon"
                >
                    mdi-account
                </v-icon>

                <div class="register--role-option_text">
                    <span class="role-title">
                        Business:
                    </span>

                    <span class="role-description">
                        If you want to list your property or book events on behalf of a 
                                        company you should create a business account.
                    </span>
                </div>
            </div>
            
            <v-divider></v-divider>
            
            <div :class="ownerRoleRowClasses">
                <v-radio 
                    value = "owner"
                ></v-radio>

                <v-icon 
                    class="register--role-option__icon"
                >
                    mdi-account
                </v-icon>

                <div class="register--role-option_text">
                    <span class="role-title">
                        Venue owner:
                    </span>

                    <span class="role-description">
                            Does your company own or host a venue? 
                        Coopax will provide a lot more venue-related functionalities.
                    </span>
                </div>
            </div>
        </v-radio-group>
    </div>    
</template>

<script>

export default {
    name: 'register2nd',

    data: () => ({
        roles: null,
    }),
  
    computed: {
        personalRoleRowClasses() {
            return [
                'register--role-option',
                this.roles === 'personal' ? 'selected-radio' : '',
            ];
        },

        businessRoleRowClasses() {
            return [
                'register--role-option',
                this.roles === 'business' ? 'selected-radio' : '',
            ];
        },

        ownerRoleRowClasses() {
            return [
                'register--role-option',
                this.roles === 'owner' ? 'selected-radio' : '',
            ];
        },

        isSelected: function() {
            return Boolean(this.roles)
        }
    },

    watch: {
        isSelected() { 
            this.$emit('active-additon-step', this.isSelected)
        },
        roles() {
            this.$emit('user-information-role', this.roles)
        }

    },
}
</script>

<style scoped>

.register--option-group {
    margin-bottom: -10px !important;
    margin-top:0px !important;
    padding-top:0px !important;
}

.v-radio-group {
    width: 660px
}
.role-title {
    font-weight: bold;
}
.register--role-option_text {
    font-size: 14px;
    color: #546E7A !important;

}

.register--role-option__icon {
    font-size: 60px !important;
    margin-left: -25px;
}

.register--role-option {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 5px 0;
}

.register--main-content {
    width: 660px;
}

.register--main-content__header {
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #37474F;
}

.register--main-content__description {
    font-family: 'Roboto', sans-serif;            
    font-size: 16px;
    line-height: 20px;
    color: #546E7A;
    padding-top: 10px;
}

.selected-radio .role-title {
    color: #1565C0 !important;
}

.selected-radio .register--role-option__icon {
    color: #1565C0 !important;
}
</style>