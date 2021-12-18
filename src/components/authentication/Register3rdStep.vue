<template>
    <div class="register--main-content">
        <div class="register--main-content__header">Event description</div>

        <div class="register--main-content__description">Please enter your information about events</div>
        
        <div class="register--main-content__input">
            <form ref="form">
                <div class="form-container">
                    <v-text-field
                        class="input--text-filed"
                        v-model="userEventInformation.eventName"
                        label="Name"
                        required
                        color="#546E7A"
                        outlined
                    ></v-text-field>

                    <v-textarea
                        outlined
                        label="Description"
                        required
                        v-model="userEventInformation.eventDescription"
                        color="#546E7A"
                    ></v-textarea>              
                </div>
            </form>
        </div>
    </div>

</template>

<script>
export default {
    name:"register3rd",
    
    data: () => ({
        userEventInformation: {
            eventName: '',
            eventDescription: ''
        }
    }),

    watch: {
        userEventInformation: {
            handler() {
                this.$emit('user-information-event', this.userEventInformation)
            },
            deep: true,
        },
    }
}
</script>

<style scoped>
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