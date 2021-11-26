<template>
    <div class="left">
        <img class="background-img" src = "../../../assets/1.png">

        <div class="background-img--title">The most beautiful venue for your event at your fingertips</div>

        <div class="background-img--logo">
            <img src = "../../../assets/Group 11.png">
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'LeftLogin'
    } 
</script>

<style scoped>
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 3;
        height: 100vh;
    }

    .background-img {
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        filter: brightness(70%);
    }

    .background-img--title {
        position: absolute;
        width: 378px;
        font-family: 'Quicksand', sans-serif;            
        font-weight: 600;
        font-size: 50px;
        line-height: 65px;
        color: #FFFFFF;
        z-index: 4
    }

    .background-img--logo {
        position: absolute;
        width: 108px;
        height: 33.75px;
        left: 30px;
        top: 27px;
    }
</style>