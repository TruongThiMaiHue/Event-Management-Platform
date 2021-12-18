<template>
    <div class="register--main-content">
        <div class='register--main-content__icon'>
            <img src='../../assets/Vector.svg'>
        </div>

        <div class="register--main-content__header">Thank you for your request!</div>

        <div class="register--main-content__description">We have sent an email to you. 
                                                        Check your mailbox to validate your account.</div>
    </div>
</template>

<script>

export default {
    name:"submitRegister",
}
</script>

<style scoped>

.register--main-content {
    width: 660px;
}
.register--main-content__icon {
    padding-bottom: 35px;
    text-align: center;
}
.register--main-content__header {
    font-family: 'Quicksand';
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #37474F;
    text-align: center;
}
.register--main-content__description{
    font-family: 'Roboto', sans-serif;            
    font-size: 16px;
    line-height: 19px;
    color: #546E7A;
    padding-top: 10px;
    text-align: center;
}
</style>