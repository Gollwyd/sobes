import loc from './loc';
import MapClass from './map';
import Weather from './weather';

const search = document.querySelector('form.right');
const deg = document.querySelectorAll('div.fieldset input[type=radio]');
const lang = document.querySelector('select.lang');
const state = {
  pic: 1,
  lang: 'en',
  deg: 'c',
};
const obj = {
  wObj: {},
  mObj: {},
};


async function getData() {
  const ipLoc = await loc();
  obj.mObj = new MapClass(ipLoc, state.lang);
  const newLoc = await obj.mObj.start();
  obj.wObj = new Weather(newLoc, state);
}


getData();
lang.addEventListener('change', () => {
  state.lang = lang.value;
  obj.wObj.lang = lang.value;
  obj.mObj.lang = lang.value;
  obj.mObj.start();
  obj.wObj.start();
});

deg.forEach((e) => e.addEventListener('change', () => {
  state.deg = e.value;
  obj.wObj.deg = state.deg;
  obj.wObj.currentWeatherDeg();
  obj.wObj.weather();
}));


search.addEventListener('submit', (e) => {
  e.preventDefault();
  obj.mObj.location = search.elements.city.value;
  obj.mObj.start().then((newLoc) => {
    obj.wObj = new Weather(newLoc, state);
    if (state.pic === 3) state.pic = 0;
    state.pic += 1;
    document.querySelector('body').style.backgroundImage = `url(src/img/bg${state.pic}.png)`;
  });
});


document.querySelector('input.newPicture').addEventListener('click', () => {
  if (state.pic === 3) state.pic = 0;
  state.pic += 1;
  document.querySelector('body').style.backgroundImage = `url(src/img/bg${state.pic}.png)`;
});
