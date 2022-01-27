import axios from 'axios';

const API_KEY = '07f6182ced5b52837ed98709b6b5879e';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class MoviesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovies() {
    // const params = {
    //   key: API_KEY,
    //   query: this.searchQuery,
    //   page: this.page,
    //   time_window: day,
    //   media_type: movie,
    // };

    this.incrementPage();
    const response = await axios('/trending/all/day?api_key=07f6182ced5b52837ed98709b6b5879e');

    console.log(response);
    return { response };
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get searchQuery() {
    return this.searchForm;
  }

  set searchQuery(newQuery) {
    this.searchForm = newQuery;
  }
}
