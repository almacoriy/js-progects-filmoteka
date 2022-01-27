// import filmcardTpl from './templates';
import MoviesApiService from './js/film-service';

const moviesApiService = new MoviesApiService();
const refs = {
  form: document.querySelector('#search-form'),
  filmCard: document.querySelector('.film-cards'),
};

refs.form.addEventListener('submit', onSearchForm);

function onSearchForm() {
  e.preventDefault();

  moviesApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
}

async function responseHandling() {
  const { response } = await moviesApiService.fetchMovies();

  console.log(response.data.results);
}

responseHandling();
