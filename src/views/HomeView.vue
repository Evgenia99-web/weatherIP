<template>
  <div class="home">
    <div class="small-info">
      <div class="today-detail">
        <p class="choose-country">Россия, <span class="choose-city">Москва</span></p>
        <img src="../assets/img/cloud.png" class="weather-today-icon">
        <p class="today-temp">-8&deg</p>
        <p class="today-time"><span class="today">Четверг</span>, 17:00</p>
      </div>
      <div class="add-info">
        <div class="favorite">
          <p class="today-weather-info">Пасмурно</p>
          <svg class="heart" version="1.0" xmlns="http://www.w3.org/2000/svg"
           width="40.000000pt" height="40.000000pt" viewBox="0 0 40.000000 40.000000"
           preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M64 351 c-41 -25 -60 -78 -45 -124 6 -19 47 -69 96 -117 l85 -85 85
            85 c49 48 90 98 96 117 31 95 -79 182 -155 122 l-26 -20 -26 20 c-33 26 -70
            27 -110 2z m85 -1 c4 0 17 -9 29 -21 21 -19 24 -19 39 -4 29 29 61 36 98 21
            40 -17 55 -42 55 -92 0 -33 -9 -46 -85 -123 l-85 -86 -85 86 c-76 77 -85 90
            -85 123 0 21 5 46 11 57 12 23 67 51 87 44 8 -3 17 -5 21 -5z"/>
            </g>
          </svg>
        </div>
        <p class="today-weather-info">Пасмурно</p>
        <div class="city-image">
          <p class="city-name">Россия, Москва</p>
        </div>
      </div>
    </div>
    <div class="info-detail">
      <div class="weather-week">
        <h4 class="title-week">Прогноз прогоды на неделю</h4>
        <div class="week-blocks">
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
          <div class="week-block">
            <p class="day-name">Пятница</p>
            <p class="day-date">2 дек.</p>
            <img src="../assets/img/cloud.png" class="day-weather-icon">
            <div class="day-temperature">
              <span class="day-temp">-8&deg</span>
              <span class="night-temp">-10&deg</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-today">
        <h4 class="title-week">Детали на сегодняшний день</h4>
        <div class="rows-detail">
          <div class="row1">
            <div class="detail">
              <p class="detail-name">Ветер, м/с</p>
              <div class="description">
                <img src="../assets/img/wind.png" class="descript-icon">
                <div class="descript-text">
                  <p class="count">2 м/с</p>
                  <p class="mark">Восточный</p>
                </div>
              </div>
            </div>
            <div class="detail second">
              <p class="detail-name">Восход / Заход</p>
              <div class="description">
                <div class="dawn">
                  <img src="../assets/img/dawn.png" class="dawn-icon">
                  <p class="time">08:35</p>
                </div>
                <div class="sunset">
                  <img src="../assets/img/sunset.png" class="dawn-icon">
                  <p class="time">16:02</p>
                </div>
              </div>
            </div>
            <div class="detail">
              <p class="detail-name">Влажность, %</p>
              <div class="description">
                <img src="../assets/img/humidity.png" class="descript-icon">
                <div class="descript-text">
                  <p class="count">80%</p>
                  <p class="mark">Высокая</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row2">
            <div class="detail">
              <p class="detail-name">УФ уровень</p>
              <div class="description">
                <img src="../assets/img/uv-index.png" class="descript-icon">
                <div class="descript-text">
                  <p class="count">0</p>
                  <p class="mark">Низкий</p>
                </div>
              </div>
            </div>
            <div class="detail second">
              <p class="detail-name">Геомагнитное поле</p>
              <div class="description">
                <img src="../assets/img/magnetic-field.png" class="descript-icon">
                <div class="descript-text">
                  <p class="mark">Неустойчивое</p>
                </div>
              </div>
            </div>
            <div class="detail">
              <p class="detail-name">Давление, мм</p>
              <div class="description">
                <img src="../assets/img/pressure.png" class="descript-icon">
                <div class="descript-text last">
                  <p class="count">767 мм рт.ст.</p>
                  <p class="mark">Повышенное</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.home, .week-blocks, .row1, .row2, .description{
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.heart{width: 30px;}
.favorite{display: flex; justify-content: space-between;align-items: center; display: none;}
.small-info{text-align: center; width: 280px;}
.weather-week{margin-bottom: 27px;}
.choose-country{
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  color: #B5B5B5;
  margin-top: 0;
  margin-bottom: 7px;
}
.choose-city{
  font-weight: 600;
  color: #0071BC;
}
.weather-today-icon{max-width: 140px;}
.today-temp{
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 86px;
  line-height: 117px;
  color: #8AA5BA;
  margin: -20px 0 0;
}
.today-time{
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  color: #B5B5B5;
  margin: 0;
}
.today{
  font-weight: 600;
  color: #0071BC;}
.today-detail{
  padding-bottom: 20px;
  border-bottom: 1px solid #E2E2E2;}
.today-weather-info{
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #8A8A8A;
  margin: 20px 0;
}
.city-image{
  background: url("../assets/img/moscow.jpg") no-repeat center;
  box-shadow: inset 0 0 0 1000px rgba(138, 165, 186, 0.6);
  background-size: cover;
  border-radius: 15px;
  padding: 40px 25px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
}
.city-name{margin: 0;}
.title-week{
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #8AA5BA;
  margin-top: 0;
  margin-bottom: 25px;
}
.week-block{
  background: #FFFFFF;
  border-radius: 15px;
  max-width: 120px;
  text-align: center;
  margin-right: 15px;
  padding: 13px 22px;
}
.day-name{
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  color: #0071BC;
  margin: 0;
}
.day-date{
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 14px;
  color: #B5B5B5;
  margin-top: 3px;
  margin-bottom: 7px;
}
.day-weather-icon{width: 60px; height: 60px;}
.day-temp, .night-temp{
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #8AA5BA;
  margin-right: 5px;
}
.night-temp{font-weight: 300; margin-right: 0}
.detail{
  width: 230px;
  background: #FFFFFF;
  border-radius: 15px;
  padding: 15px 30px;
}
.row1{margin-bottom: 20px;}
.row1 .detail{max-height: 180px}
.detail-name{
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  color: #0071BC;
  margin-bottom: 10px;
}
.description{align-items: center}
.descript-icon{
  max-width: 50px;
  margin-right: 20px;}
.descript-text{
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 23px;
  line-height: 25px;
  color: #8AA5BA;
}
.mark{
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin-left: 5px;
  margin-top: 5px;
}
.description{justify-content: space-around;}
.dawn-icon{max-width: 50px;}
.dawn, .sunset{
  text-align: center;
  padding: 0 10px;
  display: flex;
  align-items: center;}
.dawn{margin-right: 15px;}
.time{
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #8AA5BA;
  opacity: 0.8;
  margin-left: 5px;
  margin-top: 5px;
}
.last{display: block;}
</style>