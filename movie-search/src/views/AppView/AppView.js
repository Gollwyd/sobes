import Swiper from 'swiper';
import createCards from './createCards';

export default class AppView {
  // constructor(cards) {
  //   this.cards = cards;
  // }


  render() {
    this.swiperContainer = document.createElement('div');
    this.swiperContainer.classList.add('swiper-container');
    this.main = document.querySelector('main');
    this.main.appendChild(this.swiperContainer);

    this.swiperPagination = document.createElement('div');
    this.swiperPagination.classList.add('swiper-pagination');
    this.swiperContainer.appendChild(this.swiperPagination);

    this.swiperButtonNext = document.createElement('div');
    this.swiperButtonNext.classList.add('swiper-button-next');
    this.swiperContainer.appendChild(this.swiperButtonNext);

    this.swiperButtonPrev = document.createElement('div');
    this.swiperButtonPrev.classList.add('swiper-button-prev');
    this.swiperContainer.appendChild(this.swiperButtonPrev);

    this.swiperWrapper = document.createElement('div');
    this.swiperWrapper.classList.add('swiper-wrapper');
    this.swiperContainer.appendChild(this.swiperWrapper);
  }

  async insertCards(cards) {
    this.cards = cards;
    this.swiperContainer.classList.remove('loaded');
    const slides = await createCards(this.cards);
    this.swiperContainer.classList.add('loaded');

    this.swiperWrapper.innerHTML = slides.join('');
    let cardsQuantity = 4;
    if (window.innerWidth < 900) cardsQuantity = 3;
    if (window.innerWidth < 700) cardsQuantity = 2;
    if (window.innerWidth < 500) cardsQuantity = 1;

    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: cardsQuantity,
      spaceBetween: 30,
      slidesPerGroup: cardsQuantity,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
