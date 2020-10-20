/* eslint-disable prefer-destructuring */
/* eslint-disable camelcase */

export default class Weather {
  constructor(loc, state) {
    this.lang = state.lang;
    this.deg = state.deg;
    this.loc = loc;
    this.key = '26942b6ad1004833a64185840202805';
    this.start();
    this.tKey = 'trnsl.1.1.20200509T082738Z.50f3e93f9420294b.940834523138a455f4eb38f9fdd675190e591478';
  }

  async start() {
    const data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&days=3&lang=${this.lang}&q=${this.loc}`);
    this.body = await data.json();
    this.setDate();
    this.currentWeather();
    this.currentWeatherDeg();
    this.weather();
  }

  weather() {
    const forecast = this.body.forecast.forecastday;
    for (let i = 0; i < 3; i += 1) {
      let day = new Date(forecast[i].date);
      day = this.gettingDay(day.getDay());
      let temperature = forecast[i].day.maxtemp_f.toFixed();
      if (this.deg === 'c') {
        temperature = forecast[i].day.maxtemp_c.toFixed();
      }

      document.querySelectorAll('div.days > div > div > p.day')[i].innerHTML = day;
      document.querySelectorAll('div.days > div > div > div > p.temperature')[i].innerHTML = `${temperature}°`;
      document.querySelectorAll('div.days > div > div > div > img.icon')[i].src = `http:${forecast[i].day.condition.icon}`;
    }
  }

  async setDate() {
    const resp = await fetch(`https://htmlweb.ru/json/geo/timezone/${this.loc}`);
    const body = await resp.json();
    let offset = body.offset;
    offset = parseInt(offset, 10);
    console.log(offset);
    const cli = new Date();
    const time = new Date(+cli + (+cli.getTimezoneOffset() + offset * 60) * 60000);
    const [day, month, date, , hhmm] = time.toString().split(' ');
    const [hh, mm] = hhmm.split(':');
    let stringDate = `${day} ${date} ${month} ${hh}:${mm}`;
    if (this.lang !== 'en') {
      const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.tKey}&text=${stringDate}&lang=en-ru`);
      const data = await response.json();
      stringDate = data.text[0];
    }
    document.querySelector('div.time p').innerHTML = stringDate;
  }

  currentWeather() {
    document.querySelector('div.icon img').src = `http:${this.body.current.condition.icon}`;
  }

  currentWeatherDeg() {
    const condition = this.body.current.condition.text;
    const {
      feelslike_c, humidity, wind_kph, feelslike_f,
    } = this.body.current;
    let feelsLike = feelslike_f;
    if (this.deg === 'c') {
      feelsLike = feelslike_c;
      document.querySelector('div.temp span').innerHTML = this.body.current.temp_c.toFixed();
    } else {
      document.querySelector('div.temp span').innerHTML = this.body.current.temp_f.toFixed();
    }
    if (this.lang === 'en') {
      document.querySelector('div.more p').innerHTML = `${condition} <br>
     feels like: ${feelsLike}° <br>
     wind: ${(wind_kph / 3.6).toFixed()}<span> m/s</span> <br>
    humidity: ${humidity}%`;
    } else {
      document.querySelector('div.more p').innerHTML = `${condition} <br>
     ощущается как: ${feelsLike}° <br>
     ветер: ${(wind_kph / 3.6).toFixed()}<span> м/с</span> <br>
    влажность: ${humidity}%`;
    }
  }

  gettingDay(day) {
    if (this.lang === 'en') {
      if (day === 1) return 'monday';
      if (day === 2) return 'Tuesday';
      if (day === 3) return 'Wednesday';
      if (day === 4) return 'Thursday';
      if (day === 5) return 'Friday';
      if (day === 6) return 'Saturday';
      if (day === 0) return 'Sunday';
      return 'Ошибка';
    }
    if (day === 1) return 'понедельник';
    if (day === 2) return 'вторник';
    if (day === 3) return 'среда';
    if (day === 4) return 'четверг';
    if (day === 5) return 'петница';
    if (day === 6) return 'суббота';
    if (day === 0) return 'воскресенье';
    return 'Ошибка';
  }
}
