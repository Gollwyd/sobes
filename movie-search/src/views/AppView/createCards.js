/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

export default async function createCards(cards) {
  const slides = [];
  async function createCard(card) {
    const {
      Title, Year, Poster, imdbID,
    } = card;
    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=e30ce2a1`);
    const rating = await res.json();


    const code = `<div class="swiper-slide">
    <div class="poster"><a href="https://www.imdb.com/title/${imdbID}" target="_blank">${Title}</a></div>
    <img src=${Poster} alt=${Title}>
    <div><img src="src/star.png" class="star"><span>${rating.imdbRating}</span></div>
    <span>${Year}</span>
    </div>`;


    slides.push(code);
  }


  for (const card of cards) { await createCard(card); }
  /*
  if (cards[0]) await createCard(cards[0]);
  if (cards[1]) await createCard(cards[1]);
  if (cards[2]) await createCard(cards[2]);
  if (cards[3]) await createCard(cards[3]);
  if (cards[4]) await createCard(cards[4]);
  if (cards[5]) await createCard(cards[5]);
  if (cards[6]) await createCard(cards[6]);
  if (cards[7]) await createCard(cards[7]);
  if (cards[8]) await createCard(cards[8]);
  if (cards[9]) await createCard(cards[9]);
*/

  return slides;
}
