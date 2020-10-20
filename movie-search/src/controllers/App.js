import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(word = 'dream', page = 1) {
    this.word = word;
    this.page = page;
    this.url = `https://www.omdbapi.com/?s=${this.word}&page=${this.page}&apikey=e30ce2a1`;
  }

  async start() {
    const model = new AppModel(this.url);
    const data = await model.getClips();

    this.view = new AppView(data);

    this.view.render();
    this.view.insertCards(data);
  }

  async reload(word = 'dream', page = 1) {
    this.word = await App.translate(word);
    this.page = page;

    this.url = `https://www.omdbapi.com/?s=${this.word}&page=${this.page}&apikey=e30ce2a1`;
    const mod = new AppModel(this.url);
    const dat = await mod.getClips();
    if (dat.Response === 'False') { document.querySelector('.error').innerText = `No results for «${word}»`; } else {
      if (word !== this.word) { document.querySelector('.error').innerText = `Showing results for «${this.word}»`; } else { document.querySelector('.error').innerText = ''; }
      this.view.insertCards(dat);
    }
  }

  static async translate(word) {
    const resp = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200509T082738Z.50f3e93f9420294b.940834523138a455f4eb38f9fdd675190e591478&text=${word}&lang=ru-en`);
    const data = await resp.json();
    return data.text[0];
  }
}
