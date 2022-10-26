import axios from 'axios';
export default class GetRequest {
  constructor() {
    this.total = 0;
    this.page = 1;
    this.value = '';
    this.arrLength = 0;
    this.length = 0;
    this.maxPage = 13;
    
  }

  async getCards() {
    const response = await axios
      .get(`https://pixabay.com/api/?q=${this.value}&page=${this.page}`, {
        params: {
          key: '30769279-74f6e10d7a53d72b1cf9ddb63',
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: 40,
        },
      })
      .then(response => {
        const images = response.data.hits;
        this.arrLength = images.length;
        this.total = response.data.totalHits;
        this.page += 1;
        this.length += this.arrLength;
        return images;
      })
      .catch(error => {
        console.log(error);
      });
    return response;
  }

  resetPage() {
    this.page = 1;
  }

  get val() {
    return this.value;
  }
  set val(newValue) {
    this.value = newValue;
  }
}