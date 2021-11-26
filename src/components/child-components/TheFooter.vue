<template>
    <div class="main-content--foot">
        <div class="main-content--footer">
            <div class="main-content--footer__column">
                <div class="column-title">
                    Management
                </div>

                <div class="column-content">
                    Home Page<br>Search page<br>Even list<br>Calendar
                </div>
            </div>

            <div class="main-content--footer__column">
                <div class="column-title">
                    Management
                </div>

                <div class="column-content">
                    Home Page<br>Search page<br>Even list<br>Calendar
                </div>
            </div>

            <div class="main-content--footer__column">
                <div class="column-title">
                    Management
                </div>

                <div class="column-content">
                    Home Page<br>Search page<br>Even list<br>Calendar<br>Help desk
                </div>
            </div>
        </div>

        <div class="main-content--footInfo">

            <div>@2019 Coopax</div>

            <div class="main-content--footInfo__right">
                    <div>Excl. vat</div>
                    <div class="right-switch">
                        <div class="right-switch--but"></div>
                    </div>
                    <div class="right-incl">Incl. vat</div>
                    <div>
                        <img class = "img4" src = "assets/country.png">
                    </div>
                    <div class="right-lang">English</div>
                    <div class="right-arrow"><i class="fas fa-caret-down"></i></div>
            </div>

        </div>
    </div> 
</template>

<script>
export default {
    name: 'TheFooter'
}
</script>

<style>
.main-content--footer {
    display: flex;
    justify-content: space-between;
    height: 216px;
    margin:auto;
    max-width: 1000px;
    background: white
}

.main-content--footer__column {
    margin-top: 40px;
    font-style: normal;
}
.column-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}
.column-content {
    font-weight: 300;
    font-size: 16px;
    margin-top: 10px;
    line-height: 25px;
}

.main-content--footInfo {
    display: flex;
    border-top: 1px solid #B0BEC5;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    margin:auto;
    max-width: 1000px;
}
.main-content--footInfo__right {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.right-switch {
    margin: 0 10px;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 14px;
  } 
.right-switch--but {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #bdc2c4;
    border-radius: 34px;
}
  
.right-switch--but:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    top: -3px;
    background: #78909C;
    border-radius: 50%;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

}
.right-incl {
    opacity: 0.5;

}
.img4 {
    margin-left: 80px;
    margin-right: 10px;
}
.right-lang {
    color: #546E7A
}
.right-arrow {
    margin-left: 35px;
    color: #546E7A;

}
</style>