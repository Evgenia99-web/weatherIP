<template>
<header class="header-bar">
  <div class="header-bar-left">
    <div class="logo"><a href="/"><img src="../assets/logo.png" class="logo_img"></a> </div>
    <div class="search">
      <form method="post" class="search-form">
        <input type="text" name="search" id="search" placeholder="Введите название города" class="search_input">
        <button class="search-btn"><img src="../assets/img/search.png" class="search_icon"></button>
      </form>
      <a href="#" id="location"><img src="../assets/img/pin.png" class="search_icon"></a>
    </div>
  </div>
  <div class="header-bar-right">
    <div class="language">
      <input class="lang" type="radio" name="ru" id="ru" value="ru" v-model="picked"><label for="ru" class="label ru">RU</label>
      <input class="lang en" type="radio" name="en" id="en" value="eng" v-model="picked"><label for="en" class="label">ENG</label>
    </div>
    <div class="profile"><router-link to="/registration"><img src="../assets/img/user.png"></router-link></div>
  </div>
</header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      picked: 'ru'
    }
  }
}

</script>

<style scoped>
.header-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px 40px 40px;
}
.header-bar-left, .header-bar-right, .search, .search-form{display: flex;align-items: center;}
.logo{
  max-width: 186px;
  max-height: 98px;
  margin-right: 142px;
}
.logo_img{width: 100%; height: 100%}
.search_input{
  order: 2;
  width: 400px;
  background: #F2F2F2;
  box-shadow: inset 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #878787;
  border: none;
  padding: 17px 30px;
  margin-right: 40px;
}
#location{display: none;}
.search-btn{border: 0; margin-right: 15px;}
.search_icon{width: 25px; height: 25px;}
.language{
  display: flex; flex-flow: row nowrap;
	justify-content: flex-start; align-items: stretch;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  width: 114px;
  height: 41px;
  background: #F2F2F2;
  box-shadow: inset 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  position: relative;
  color: #B5B5B5;
}
.lang{
  position: absolute;width: 40%; height: 100%; visibility: collapse;
}
.en{right: 0}
.lang + .label{
  margin: 0; padding: .5rem; box-sizing: border-box;
		position: relative; display: inline-block;
}
.lang:checked + .label{
  width: 62px;
  height: 41px;
  background: #0071BC;
  box-shadow: inset 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 45px;
  color: #ffffff;
  padding:8px;
  z-index: 1;
}
.ru{padding-left: 13px !important;}
.profile{margin-left: 67px;}
.language input:hover{cursor: pointer;}
</style>