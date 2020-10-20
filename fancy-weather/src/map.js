/* eslint-disable prefer-destructuring */
import mapboxgl from 'mapbox-gl';

export default class MapClass {
  constructor(location, state) {
    this.key = 'c491735ca8eb4d50900f2b15a91ee8fe';
    this.lang = state.lang;
    this.location = location;
    this.tKey = 'trnsl.1.1.20200509T082738Z.50f3e93f9420294b.940834523138a455f4eb38f9fdd675190e591478';
  }

  // получаем город и новые координаты
  async start() {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.location}&key=${this.key}&pretty=1&no_annotations=1`);
    const json = await response.json();
    try {
      const { lat, lng } = json.results[0].geometry;
      const { country, city, town } = json.results[0].components;
      this.country = country;
      this.city = city;
      this.town = town;
      document.querySelector('div.map-picture').innerHTML = '';

      mapboxgl.accessToken = 'pk.eyJ1IjoiZ29sbHd5ZCIsImEiOiJja2FweXd5cjQwZXVqMnBtc2lvOGlqM3VvIn0.QeINW3s8n_3vUqMQCre5QA';
      this.map = new mapboxgl.Map({
        container: document.querySelector('div.map-picture'),
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [+lng, +lat],
        pitch: 0,
        bearing: -60,
        zoom: 10,
      });

      this.lat = lat;
      this.lng = lng;
      this.setCity();
    } catch (error) {
      alert('Это какой-то неправильный город');
    }


    return `${this.lat},${this.lng}`;
  }

  async setCity() {
    const [latG, latM] = this.lat.toFixed(2).split('.');
    const [lngG, lngM] = this.lng.toFixed(2).split('.');
    const place = document.querySelector('div.city p');
    const coordinate = document.querySelector('div.coordinate p');
    if (this.lang === 'ru') {
      coordinate.innerHTML = `Широта: ${latG}°${latM}'<br>
  Долгота: ${lngG}°${lngM}'`;
      place.textContent = `${this.city || this.town}, ${this.country}`;
    } else {
      coordinate.innerHTML = `Latitude: ${latG}°${latM}'<br>
  Longitude: ${lngG}°${lngM}'`;

      const stringDate = `${this.city || this.town}, ${this.country}`;
      const resp = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.tKey}&text=${stringDate}&lang=ru-en`);
      const data = await resp.json();
      place.textContent = data.text[0];
    }
  }
}
