<template>
  <div class="profile">
    <div class="personal-info">
      <img src="../assets/img/avatar.png" class="avatar">
      <div class="info-person">
        <p class="person-name">Керем Бюрсин</p>
        <p class="person-email">kerembrusin@gmail.com</p>
        <p class="location">Турция, Стамбул</p>
      </div>
      <a href="#" class="auth-btn btn">Выйти</a>
    </div>
    <div class="actions">
      <h2 class="profile-title">Личный кабинет</h2>
      <div class="action-blocks">
        <div class="action-block">
          <p class="action-title">История поиска городов</p>
          <ul class="city-list">
            <li class="city-item">
              <p class="city-name">Анкара</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Стамбул</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Анталья</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Лондон</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
          </ul>
          <button class="reset-btn btn">Очистить историю</button>
        </div>
        <div class="action-block">
          <p class="action-title">Избранные города</p>
          <ul class="city-list">
            <li class="city-item">
              <p class="city-name">Анкара</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Стамбул</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Анталья</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
            <li class="city-item">
              <p class="city-name">Лондон</p>
              <button class="delete-btn"><img src="../assets/img/delete.png"></button>
            </li>
          </ul>
          <button class="reset-btn btn">Очистить историю</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.profile, .action-blocks{
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.personal-info{width: 280px; text-align: center; height: 70vh; position: relative;}
.avatar{width: 230px; margin-bottom: 18px;}
.person-name{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #0071BC;
  margin-bottom: 7px;
}
.person-email{
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #8AA5BA;
  margin-bottom: 30px;
}
.location{
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #878787;
  margin-bottom: 100px;
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
.actions{width: 850px; margin-right: 50px;}
.profile-title{
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 45px;
  line-height: 59px;
  color: #0071BC;
  margin-bottom: 40px;
  margin-top: 0;
}
.action-block{
  text-align: center;
  background: #FFFFFF;
  border-radius: 25px;
  width: 320px;
  padding: 30px 37px;
  max-height: 330px;
  overflow-y: auto;
}
.action-title{
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #8AA5BA;
  margin-bottom: 40px;
}
.city-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8A8A8A;
}
.delete-btn{border: 0; background: none; width: 20px; display: none;}
.delete-btn img{width: 100%;}
.reset-btn{
  background: #FF6363;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 80px;
  margin-top: 10px;
}
.city-item:hover .city-name{color: #0071BC; font-size: 20px; cursor: pointer;}
.city-item:hover .delete-btn{display: block; cursor: pointer;}
</style>