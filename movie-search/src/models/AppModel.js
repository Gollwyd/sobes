export default class AppModel {
  constructor(url) {
    this.url = url;
  }

  async getClips() {
    const resp = await fetch(this.url);
    const data = await resp.json();
    if (data.Response === 'True') {
      return data.Search;
    }
    return data;
  }
}
