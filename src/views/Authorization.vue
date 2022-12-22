<template>
  <div class="authorization">
    <div class="welcome">
      <div class="welcome-text">
        <h3 class="welcome-title">Добро пожаловать!</h3>
        <p class="welcome-descript">Мы рады приветсвовать Вас на нашем сервисе о прогнозе погоды.</p>
      </div>
      <img src="../assets/img/welcome-back.png" class="welcome-img">
      <div class="welcome-auth">
        <p class="welcome-auth-text">У вас еще нет аккаунта?</p>
        <router-link to="/registration"><a class="btn">Зарегистрироваться</a></router-link>
      </div>
    </div>
    <div class="regist-block">
      <h2 class="regist-title">Авторизация</h2>
      <form @submit="login" class="regist-form" id="regist-form">
        <input type="text" v-model="login" id="email" placeholder="Введите логин" class="input-form">
        <input type="password" v-model="password" id="password" placeholder="Введите пароль" class="input-form">
        <button variant="primary" name="regist" class="auth-btn btn">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authorization",
  data(){
    return{
      login: "",
      password: ""
    };
  },
  methods:{
    login(event){
      event.preventDefault();
    },
    setLogined(token){}
  }
}
</script>

<style scoped>
.authorization{
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.welcome{
  width: 300px;
  text-align: center;
  margin-right: 330px;
}
.welcome-title{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 40px;
  line-height: 45px;
  text-align: center;
  color: #0071BC;
  margin-bottom: 15px;
  margin-top: 0;
}
.welcome-descript{
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #8AA5BA;
  margin-bottom: 44px;
}
.welcome-img{max-width: 150px; margin-bottom: 44px;}
.welcome-auth-text{
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #8AA5BA;
  margin-bottom: 20px;
}
.btn{
  background: #0071BC;
  border-radius: 20px;
  padding: 10px 37px;
  border: none;
  color: white;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}
.auth-btn{padding: 10px 80px;}
.regist-block{text-align: center; width: 533px; margin-right: 240px; margin-top: 100px}
.regist-title{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  color: #0071BC;
  margin: 0 0 40px 0;
}
.input-form{
  width: 460px;
  background: #F2F2F2;
  border-radius: 45px;
  padding: 13px 35px;
  margin-bottom: 15px;
  border: none;
  box-shadow: inset 0px 0px 9px rgba(0, 0, 0, 0.25);
}
.input-form:hover{  cursor: pointer;}
</style>